import { Slide } from "react-awesome-reveal";
const Sponsors = () => {
  return (
    <div id="sponsors" className="w-8/12 mx-auto mt-24 flex flex-col gap-16">
      <h1 className="text-[#897be2] mx-auto text-[45px] uppercase font-bold hover:scale-110 transition-transform duration-300">
        Sponsors
      </h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 md:gap-x-6 md:gap-y-6 lg:gap-x-2 lg:gap-y-6 xl:gap-x-2 xl:gap-y-6 place-items-center">
        <Slide cascade damping={0.3} direction="left" triggerOnce>
          <a href="https://gradvine.com/" target="blank">
            <img
              src="/Images/Gradvine.png"
              alt=""
              loading="lazy"
              className="w-48 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="https://www.top-one-percent.com/" target="blank">
            <img
              src="/Images/Top One Percent.png"
              alt=""
              loading="lazy"
              className="w-48 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="https://www.omen.com/" target="blank">
            <img
              src="/Images/Omen.svg"
              alt=""
              loading="lazy"
              className="w-48 hover:scale-110 transition-transform duration-300"
            />
          </a>
        </Slide>
        <Slide cascade damping={0.3} direction="left" triggerOnce>
          <a href="https://www.hitbullseye.com/" target="blank">
            <img
              src="/Images/Hitbullseye.png"
              alt=""
              loading="lazy"
              className="w-48 mt-4 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="https://indigg-dev.netlify.app/" target="blank">
            <img
              src="/Images/Indigg.png"
              alt=""
              loading="lazy"
              className="w-48 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="https://www.quillaudits.com/" target="blank">
            <img
              src="/Images/Quillaudits.png"
              alt=""
              loading="lazy"
              className="w-48 hover:scale-110 transition-transform duration-300"
            />
          </a>
        </Slide>
        <Slide cascade damping={0.3} direction="left" triggerOnce>
          <a href="https://www.imsindia.com/" target="blank">
            <img
              src="/Images/IMS.png"
              alt=""
              loading="lazy"
              className="w-48 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="https://learningwhiletravelling.com/" target="blank">
            <img
              src="/Images/LWT_logo.webp"
              alt=""
              loading="lazy"
              className="w-44 mt-4 scale-90 md:scale-[80%] lg:scale-95 xl:scale-95 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="">
            <img
              src="/Images/Stubborn Factory.png"
              alt=""
              loading="lazy"
              className="w-36 mt-4 scale-75 lg:scale-95 xl:scale-95 hover:scale-110 transition-transform duration-300"
            />
          </a>
        </Slide>
        <Slide cascade damping={0.3} direction="left" triggerOnce>
          <a href="https://codingthinker.com/" target="blank">
            <img
              src="/Images/Coding Thinker.png"
              alt=""
              loading="lazy"
              className="w-48 mt-4 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="https://www.swiggy.com/" target="blank">
            <img
              src="/Images/Swiggy.png"
              alt=""
              loading="lazy"
              className="w-48 mt-4 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="https://amul.com/index.php" target="blank">
            <img
              src="/Images/Amul.png"
              alt=""
              loading="lazy"
              className="w-48 mt-4 hover:scale-110 transition-transform duration-300"
            />
          </a>
        </Slide>
      </div>
    </div>
  );
};

export default Sponsors;
