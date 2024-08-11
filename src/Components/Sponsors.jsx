import { Slide } from "react-awesome-reveal";
const Sponsors = () => {
  return (
    <div id="sponsors" className="w-8/12 mx-auto mt-24 flex flex-col gap-16">
      <h1 className="text-[#897be2] mx-auto text-[45px] uppercase font-bold hover:scale-110 transition-transform duration-300">
        Sponsors
      </h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 md:gap-x-6 md:gap-y-6 lg:gap-x-2 lg:gap-y-6 xl:gap-x-2 xl:gap-y-6 place-items-center">
      <Slide cascade damping={0.3} direction="left" triggerOnce>
        <img
          src="/Images/devfolio.png"
          alt=""
          loading="lazy"
          className="w-48 hover:scale-110 transition-transform duration-300"
        />
        <img
          src="/Images/polygon.png"
          alt=""
          loading="lazy"
          className="w-48 hover:scale-110 transition-transform duration-300"
        />
        <img
          src="/Images/replit.png"
          alt=""
          loading="lazy"
          className="w-48 hover:scale-110 transition-transform duration-300"
        />
        </Slide>
        <Slide cascade damping={0.3} direction="left" triggerOnce>
        <img
          src="/Images/conding-ninja_logo.png"
          alt=""
          loading="lazy"
          className="w-48 hover:scale-110 transition-transform duration-300"
        />
        <img
          src="/Images/gfg_logo.png"
          alt=""
          loading="lazy"
          className="w-48 hover:scale-110 transition-transform duration-300"
        />
        <img
          src="/Images/unstop_logo.png"
          alt=""
          loading="lazy"
          className="w-48 hover:scale-110 transition-transform duration-300"
        />
        </Slide>
        <Slide cascade damping={0.3} direction="left" triggerOnce>
        <img
          src="/Images/newton_logo.png"
          alt=""
          loading="lazy"
          className="w-48 mt-4 hover:scale-110 transition-transform duration-300"
        />
        <img
          src="/Images/LWT_logo.webp"
          alt=""
          loading="lazy"
          className="w-44 mt-4 scale-90 md:scale-[80%] lg:scale-95 xl:scale-95 hover:scale-110 transition-transform duration-300"
        />
        <img
          src="/Images/dst_logo_circle.png"
          alt=""
          loading="lazy"
          className="w-36 mt-4 scale-75 lg:scale-95 xl:scale-95 hover:scale-110 transition-transform duration-300"
        />
        </Slide>
      </div>
    </div>
  );
};

export default Sponsors;
