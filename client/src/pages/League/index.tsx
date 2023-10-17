import Leagues from "../../constants/leagues.json";
import { useNavigate } from "react-router-dom";
import { Hanko } from "@teamhanko/hanko-elements";
import { useEffect, useMemo } from "react";
import { Header } from "../../components";

const League = () => {
  const navigate = useNavigate();
  const hanko = useMemo(
    () => new Hanko("https://fb2db83e-873b-414d-9659-cc2567b7fec7.hanko.io"),
    []
  );

  useEffect(() => {
    if (!hanko.session.isValid()) {
      navigate("/");
    }
  }, [hanko.session, navigate]);

  const navigateToLeague = (name: string) => {
    navigate(`/play/${name}`);
  };

  return (
    <>
      <Header />
      <div className="absolute top-0 pt-36 justify-start items-center flex flex-col h-full w-full">
        <div className="mb-10">
          <span className="font-black text-3xl tracking-wide">Select League</span>
        </div>
        <div className="flex flex-col space-y-10">
          {Leagues.map((league) => {
            return (
              <button
                className="w-full px-10 py-6 font-semibold rounded-md shadow-md font-sora bg-gradient-to-tr from-yellow-400 to-yellow-200"
                onClick={() => navigateToLeague(league.name)}
                disabled={league.enabled}
              >
                {league.name}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default League;
