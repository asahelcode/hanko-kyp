import { useState, useEffect, useCallback, MouseEvent } from "react";
import axios from "axios";
import premierPlayer from "../../constants/wah.json";
import { DoorDashFavorite, Header } from "../../components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

interface Player {
  strPlayer: string;
  strThumb: string;
}

const getRandomPlayer = () => {
  return Math.floor(Math.random() * premierPlayer.PremierLeague.length);
};

function getRandomIndices(arr: string[], count: number) {
  const indices = [...arr.keys()]; // Create an array of indices
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]]; // Shuffle the indices
  }
  return indices.slice(0, count); // Get the first 'count' indices
}

const Play = () => {
  // const { slug } = useParams();
  const [start, setStart] = useState(false);
  const [playerInfo, setPlayerInfo] = useState<Player>();
  const [playerOptions, setPlayerOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [playerToDisplay, setPlayerToDisplay] = useState("");
  const [progress, setProgress] = useState(50);
  const [loses, setLoses] = useState(0);
  const [wins, setWins] = useState(0);

  const navigate = useNavigate();

  const verifyAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const player = (e.target as HTMLButtonElement).value;
    if (player.toLowerCase() == playerToDisplay.toLowerCase()) {
      setWins(wins + 10);
      toast.success("🦄 You too sabi", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      if (loses == 5) {
        navigate("/play");
      } else {
        setLoses(loses + 1);
        toast.error("🦄 Gattaway you", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }

    playGame();
  };

  function shuffle(arr: string[]) {
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

  const playGame = useCallback(async () => {
    const player = premierPlayer.PremierLeague[getRandomPlayer()];
    const randomIndices = getRandomIndices(premierPlayer.PremierLeague, 3);
    let playerData;
    setLoading(true);
    setProgress(50);

    const options = randomIndices.map((index) => {
      return premierPlayer.PremierLeague[index];
    });

    await axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${player}`
      )
      .then((res) => {
        setLoading(false);
        playerData = res.data.player[0];
      })
      .catch((err) => console.log(err));

    options.push(player);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!playerData || (playerData as any)?.strSport !== "Soccer") {
      playGame();
    } else {
      setPlayerInfo(playerData);
    }

    setPlayerToDisplay(player);
    setPlayerOptions(shuffle(options));
  }, [
    setLoading,
    setProgress,
    setPlayerInfo,
    setPlayerToDisplay,
    setPlayerOptions,
  ]);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress - 1);

        if (progress === 0) {
          clearInterval(interval);
          toast.error("Time out", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          playGame();
          setProgress(50);
        }
      }, 300);
      return () => {
        clearInterval(interval);
      };
    }
  }, [start, playGame, playerInfo, progress]);

  return (
    <>
      <Header />
      {!start ? (
        <div className="absolute top-0 pt-36 justify-center items-center flex text-3xl flex-col h-full w-full">
          <p className="text-lg font-semibold font-sora">
            You lose when you miss five players name
          </p>
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
        <div className="absolute top-0 pt-36 justify-start items-center flex text-3xl flex-col h-full w-full lg:flex-row lg:justify-center lg:relative">
          <div className="rounded-md w-full flex justify-center items-center">
            {loading ? (
              <DoorDashFavorite />
            ) : (
              <>
                <div className="relative w-full flex justify-center">
                  <img
                    src={playerInfo?.strThumb}
                    alt=""
                    className="w-4/5  rounded-xl shadow-md object-contain lg:w-3/5 lg:h-2/5"
                  />
                  <div className="absolute top-5 left-16 bg-black text-white font-sora p-2 rounded-full lg:left-44">
                    {progress}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="lg:grid  lg:grid-cols-2 lg:pr-12 lg:gap-10 lg:space-y-0 justify-start items-center flex text-2xl flex-col h-full w-full space-y-5 mt-5">
            {playerOptions.map((player) => (
              <button
                className="bg-blue-700 p-5 w-4/5 text-white font-sora shadow-md rounded-md lg:w-full"
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
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Play;
