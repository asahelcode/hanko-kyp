import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import CarouselFive from "../../assets/images/neyman.jpeg";
import CarouselTwo from "../../assets/images/CristianoMessi.jpeg";
import CarouselOne from "../../assets/images/msn.jpeg";
import CarouselThree from "../../assets/images/nike.jpeg";
import CarouselFour from "../../assets/images/duel.jpeg";

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
    <div className="h-screen w-full -z-10">
      <ReactCarousel {...CarouselProps}>
        {[
          <div className="relative">
            <img
              src={CarouselFive}
              alt=""
              className="h-[500px] object-center object-cover -z-20"
            />
          </div>,
          <div className="relative ">
            <img
              src={CarouselTwo}
              alt=""
              className="h-[500px] object-center object-cover"
            />
          </div>,
          <div className="relative ">
            <img
              src={CarouselOne}
              alt=""
              className="h-[500px] object-center object-cover"
            />
          </div>,
          <div className="relative ">
            <img
              src={CarouselThree}
              alt=""
              className="h-[500px] object-center object-cover"
            />
          </div>,
          <div className="relative ">
            <img
              src={CarouselFour}
              alt=""
              className="h-[500px] object-center object-cover"
            />
          </div>,
        ]}
      </ReactCarousel>
    </div>
  );
};

export default Carousel;
