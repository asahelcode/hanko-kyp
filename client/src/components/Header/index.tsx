import { Icon } from "semantic-ui-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-50 px-8 py-8 z-20 bg-transparent">
      <div className="flex items-center justify-center">
        <Icon name="soccer" size="big" color="grey" />
        <span className="text-4xl tracking-widest font-bold font-sora">
          K<span className="text-4xl text-gray-500 font-worksans">Y</span>P
        </span>
      </div>
      <div>
        <ul className="text-gray-600 hidden justify-center space-x-6 font-sora font-bold text-lg">
          <li>Home</li>
          <li>Leaderboard</li>
          <li>About us</li>
        </ul>
      </div>
      <div className="flex space-x-3 items-center">
        <div>
          <button className="border-gray-200 font-sora font-medium border-2 shadow-md rounded-lg bg-yellow-400 p-3 text-black hover:bg-yellow-300 hover:bg-gradient-to-tr hover:to-gray-300 hover:text-white hover:from-gray-800 hover:shadow-inner">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
