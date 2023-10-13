import Leagues from "../../constants/leagues.json";

const League = () => {
  return (
    <div className="absolute top-0 pt-36 justify-start items-center flex flex-col h-full w-full">
      <div className="mb-10">
        <span className="font-black text-3xl tracking-wide">Select League</span>
      </div>
      <div className="flex flex-col space-y-10">
        {Leagues.map((league) => {
          return (
            <button className="w-full px-10 py-6 font-semibold rounded-md shadow-md font-sora bg-gradient-to-tr from-yellow-400 to-yellow-200">
              {league.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default League;
