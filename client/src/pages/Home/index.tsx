import { Carousel, Header } from "../../components";
import { useNavigate } from "react-router-dom";
import { Hanko } from "@teamhanko/hanko-elements";
import { useEffect, useMemo, useState } from "react";

import Image from "../../assets/images/soccer-players-action-professional-stadium.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const hankoApi = import.meta.env.VITE_HANKO_API_URL;
  const hanko = useMemo(
    () => new Hanko(hankoApi),
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
      <Header />
      {!isMobile ? (
        <div className="relative flex justify-center items-center">
          <img src={Image} alt="" className="h-screen w-full object-fit" />
          <div className="absolute top-96 w-4/5 flex flex-col  items-start">
            <p className="text-white font-sora text-5xl w-2/6 text-left tracking-wide leading-5xl">
              Do you really know soccer players?
            </p>
            <button
              className="bg-green-400 shadow-2xl border-b-2 border-gray-400 p-3  px-16 rounded-md text-white font-sora"
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
