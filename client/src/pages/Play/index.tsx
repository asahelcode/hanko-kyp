import { useParams } from "react-router-dom";
import LeagueTeams from "../../constants/teams.json";
import { useState, useEffect } from "react";

const Play = () => {
  const { slug } = useParams();
  const [start, setStart] = useState(false);

  interface LeagueMap {
    [key: string]: number;
  }

  const leagues: LeagueMap = {
    "English Premier League": 0,
    "Spanish La Liga": 1,
    "Italian Serie A": 2,
    "French Ligue 1": 3,
    "Germany Bundesliga": 4,
  };

  useEffect(() => {
    if (slug !== undefined) {
      console.log(LeagueTeams[leagues[slug]]);
    }
  }, [leagues, slug]);

  return (
    <>
      { !start ? (
        <div className="absolute top-0 pt-36 justify-center items-center flex text-3xl flex-col h-full w-full">
          <button
            className="bg-green-400 p-3 rounded-lg px-10"
            onClick={() => setStart(true)}
          >
            Start
          </button>
        </div>
      ) : (
        <div>Hello</div>
      )}
    </>
  );
};

export default Play;
