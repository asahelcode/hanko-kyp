import { Carousel } from "../../components";
import { useNavigate } from "react-router-dom";
import { Hanko } from "@teamhanko/hanko-elements";
import { useEffect, useMemo, useState } from "react";

import Image from "../../assets/images/legend.jpeg";

const Home = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const hanko = useMemo(
    () => new Hanko("https://fb2db83e-873b-414d-9659-cc2567b7fec7.hanko.io"),
    []
  );

  useEffect(() => {
    if (!hanko.session.isValid()) {
      navigate("/");
    }
  }, [hanko.session, navigate]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // Update the state based on the window width
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!isMobile ? (
        <div className="relative flex justify-center items-center">
          <img src={Image} alt="" className="h-screen w-full object-fit" />
          <div className="absolute w-3/5 flex flex-col justify-center items-center">
            <p className="text-white font-sora text-4xl w-2/4 text-center">
              Do you really know soccer players?
            </p>
            <button
              className="bg-green-400 shadow-2xl border-b-2 border-gray-400 p-3  px-10 rounded-md text-white font-sora"
              onClick={() => navigate("/play")}
            >
              Play
            </button>
          </div>
        </div>
      ) : (
        <Carousel />
      )}
    </>
  );
};

export default Home;
