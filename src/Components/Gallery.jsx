import Swiper from "./Nested Components/Swiper/Swiper";
import { Zoom } from "react-awesome-reveal";
const Gallery = () => {
  return (
    <div
      id="gallery"
      className="w-10/12 lg:w-7/12 xl:w-7/12 mx-auto mt-24 flex flex-col gap-16"
    >
      <h1 className="text-[#897be2] text-center text-[45px] uppercase font-bold hover:scale-110 transition-transform duration-300  z-10">
        Gallery
      </h1>
      <Zoom cascade damping={0.3} triggerOnce>
        <div>
          <Swiper />
        </div>
      </Zoom>
    </div>
  );
};

export default Gallery;
