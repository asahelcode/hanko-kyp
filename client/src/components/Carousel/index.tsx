import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import CarouselFive from "../../assets/images/bb158a84-bb90-4b66-8490-82ceef24cd81.jpeg";
import CarouselTwo from "../../assets/images/marcelo.jpeg";
import CarouselOne from "../../assets/images/Ellie.jpeg";
import CarouselFour from "../../assets/images/duel.jpeg";
import CarouselSix from "../../assets/images/msn.jpeg";
import CarouselSeven from "../../assets/images/ronaldo.jpeg";

const Carousel = () => {
  const CarouselProps = {
    autoPlay: true,
    dynamicHeight: false,
    infiniteLoop: true,
    showArrows: false,
    showStatus: false,
    showThumbs: false,
    swipeable: true,
    interval: 2000,
  };

  return (
    <div className="relative">
      <div className="w-full -z-10">
        <ReactCarousel {...CarouselProps}>
          {[
            <div className="w-full h-screen">
              <img
                src={CarouselFour}
                alt=""
                className="h-screen object-center object-cover -z-20"
              />
              <p className="flex items-center justify-center text-center w-full h-full text-white text-7xl font-bold font-sora absolute top-0">
                DO
              </p>
            </div>,
            <div className="w-full h-screen">
              <img
                src={CarouselSix}
                alt=""
                className="h-screen object-center object-cover -z-20"
              />
              <p className="flex items-center justify-center text-center w-full h-full text-white text-7xl font-bold font-sora absolute top-0">
                YOU
              </p>
            </div>,
            <div className="w-full h-screen">
              <img
                src={CarouselSeven}
                alt=""
                className="h-screen object-center object-cover -z-20"
              />
              <p className="flex items-center justify-center text-center w-full h-full text-white text-7xl font-bold font-sora absolute top-0">
                REALLY
              </p>
            </div>,
            <div className="w-full h-screen">
              <img
                src={CarouselOne}
                alt=""
                className="h-screen object-center object-cover -z-20"
              />
              <p className="text-center w-full h-full text-black text-6xl font-bold font-black absolute top-44 -right-28">
                KNOW
              </p>
            </div>,
            <div className="w-full h-screen relative">
              <img
                src={CarouselFive}
                alt=""
                className="h-screen object-center object-cover -z-20"
              />
              <p className="flex items-top justify-center text-center w-full h-full text-white text-7xl font-bold font-sora absolute top-52">
                YOUR
              </p>
            </div>,
            <div className="w-full h-screen relative">
              <img
                src={CarouselTwo}
                alt=""
                className="h-screen object-center object-cover -z-20"
              />
              <p className="flex items-top justify-center text-center w-full h-full text-black text-7xl font-bold font-black absolute top-44">
                PLAYERS
              </p>
            </div>,
          ]}
        </ReactCarousel>
      </div>
      <div className="absolute text-white text-center flex justify-center items-center w-full bottom-48 font-sora text-3xl space-y-4">
        <button className="bg-yellow-400 p-3 text-gray-600 px-6 rounded-md">
          Play
        </button>
      </div>
    </div>
  );
};

export default Carousel;
