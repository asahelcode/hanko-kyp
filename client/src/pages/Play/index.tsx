import { useParams } from "react-router-dom";
import LeagueTeams from "../../constants/teams.json";
import { useState, useEffect } from "react";
import axios from "axios";
import premierPlayer from "../../constants/wah.json";
import { DoorDashFavorite } from "../../components";

interface Player {
  strPlayer: string;
  strThumb: string;
}

interface LeagueMap {
  [key: string]: number;
}

const getRandomPlayer = () => {
  return Math.floor(Math.random() * premierPlayer.PremierLeague.length);
};

function getRandomIndices(arr, count) {
  const indices = [...arr.keys()]; // Create an array of indices
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]]; // Shuffle the indices
  }
  return indices.slice(0, count); // Get the first 'count' indices
}

const Play = () => {
  const { slug } = useParams();
  const [start, setStart] = useState(false);
  const [playerInfo, setPlayerInfo] = useState<Player>();
  const [playerOptions, setPlayerOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [playerToDisplay, setPlayerToDisplay] = useState("");

  const verifyAnswer = (e) => {
    e.preventDefault();
    const player = e.target.value;
    console.log(":)", player);
    console.log(":(", playerToDisplay);
    if (player.toLowerCase() == playerToDisplay.toLowerCase()) {
      alert("Correct Answer");
    } else {
      alert("Wrong Answer");
    }

    playGame();
  };

  function shuffle(arr) {
    // Create a copy of the original array
    const shuffledArray = [...arr];

    // Fisher-Yates shuffle algorithm to shuffle the copy
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  }

  const playGame = async () => {
    const player = premierPlayer.PremierLeague[getRandomPlayer()];
    const randomIndices = getRandomIndices(premierPlayer.PremierLeague, 3);
    setLoading(true);
    setPlayerToDisplay(player);

    const options = randomIndices.map((index) => {
      return premierPlayer.PremierLeague[index];
    });

    console.log("###", player);
    await axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${player}`
      )
      .then((res) => {
        setLoading(false);
        setPlayerInfo(res.data.player[0]);
      })
      .catch((err) => console.log(err));

    options.push(player);
    setPlayerToDisplay(player);
    setPlayerOptions(shuffle(options));
  };

  return (
    <>
      {!start ? (
        <div className="absolute top-0 pt-36 justify-center items-center flex text-3xl flex-col h-full w-full">
          <button
            className="bg-green-400 p-3 rounded-lg px-10"
            onClick={() => {
              setStart(true);
              playGame();
            }}
          >
            Start
          </button>
        </div>
      ) : (
        <div className="absolute top-0 pt-36 justify-start items-center flex text-3xl flex-col h-full w-full">
          <div className="rounded-md w-full flex justify-center items-center">
            {loading ? (
              <DoorDashFavorite />
            ) : (
              <>
                <img
                  src={playerInfo?.strThumb}
                  alt=""
                  className="w-4/5  rounded-xl shadow-mdobject-contain"
                />
              </>
            )}
          </div>
          <div className=" justify-start items-center flex text-2xl flex-col h-full w-full space-y-5 mt-5">
            {playerOptions.map((player) => (
              <button
                className="bg-blue-700 p-5 w-4/5 text-white font-sora shadow-md rounded-md"
                onClick={verifyAnswer}
                value={player}
                key={player}
              >
                {player}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Play;
