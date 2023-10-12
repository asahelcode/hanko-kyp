import Logo from "../../assets/images/okyp.jpg";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-50 px-8 py-6 z-20 bg-white  bg-opacity-25 fixed w-full">
      <div className="flex items-center justify-center">
        <img src={Logo} alt="" className="w-24 h-24 object-cover rounded-full"/>
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
