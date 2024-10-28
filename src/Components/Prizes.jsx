import { Slide } from "react-awesome-reveal";
const Prizes = () => {
  return (
    <div id="prizes" className="w-9/12 mx-auto mt-24 flex flex-col gap-16">
      <h1 className="text-[#897be2] text-center text-[45px] uppercase font-bold hover:scale-110 transition-transform duration-300 z-10">
        Prizes
      </h1>
      <div className="mx-auto flex flex-col md:hidden">
        <Slide cascade damping={0.3} direction="right" triggerOnce>
          <div className="flex flex-col -mb-10 items-center">
            <img
              src="/Images/gold.png"
              alt=""
              loading="lazy"
              className="scale-50 transition-transform duration-300 -mb-10"
            />
            <p className="text-[1.5rem] text-[#808080] hover:scale-110 transition-transform duration-300">
              ₹ 15,000
            </p>
          </div>
          <div className="flex flex-col -mb-10 items-center">
            <img
              src="/Images/silver.png"
              alt=""
              loading="lazy"
              className="scale-50 transition-transform duration-300 ml-4 -mb-10"
            />
            <p className="text-[1.5rem] text-[#808080] hover:scale-110 transition-transform duration-300">
              ₹ 10,000
            </p>
          </div>
          <div className="flex flex-col -mb-10 items-center">
            <img
              src="/Images/bronze.png"
              alt=""
              loading="lazy"
              className="scale-50 transition-transform duration-300 ml-4 -mb-10"
            />
            <p className="text-[1.5rem] text-[#808080] hover:scale-110 transition-transform duration-300">
              ₹ 5,000
            </p>
          </div>
        </Slide>
      </div>
      <div className="mt-10 mx-auto gap-10 hidden md:flex lg:flex xl:flex">
        <Slide cascade damping={0.3} direction="right" triggerOnce>
          <div className="flex flex-col items-center">
            <img
              src="/Images/silver.png"
              alt=""
              loading="lazy"
              className="scale-75 hover:scale-90 transition-transform duration-300"
            />
            <p className="text-[2.5rem] md:text-[2rem] mr-4 text-[#808080] hover:text-[#ddd] hover:scale-110 transition-all duration-300">
              ₹ 10,000
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img
              src="/Images/gold.png"
              alt=""
              loading="lazy"
              className="scale-110 hover:scale-125 transition-transform duration-300"
            />
            <p className="text-[3.5rem] md:text-[2rem] text-[#808080] hover:text-[#ddd] hover:scale-110 transition-all duration-300">
              ₹ 15,000
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/Images/bronze.png"
              alt=""
              loading="lazy"
              className="scale-75 hover:scale-90 transition-transform duration-300"
            />
            <p className="text-[2.5rem] md:text-[2rem] text-[#808080] hover:text-[#ddd] hover:scale-110 transition-all duration-300">
              ₹ 5,000
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Prizes;
