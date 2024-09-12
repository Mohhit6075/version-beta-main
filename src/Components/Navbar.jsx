import Drawer from "./Nested Components/Drawer/Drawer";

const Navbar = () => {
  return (
    <>
      <div id="navbar" className="w-full mx-auto flex justify-around items-center text-[#ddd] pt-4">
        <a href="https://www.istemanit.in/" target="blank">
          <img src="/Images/Logo.svg" alt="logo" loading="lazy" />
        </a>
        <div className="items-center hidden md:flex lg:flex xl:flex gap-2 md:gap-4 lg:gap-6 xl:gap-10 font-medium text-xl">
          <a href="/" className="group">
            Home
            <div className="w-0 h-[1px] bg-[#6054aa] rounded-full group-hover:w-full transition-all duration-500"></div>
          </a>
          <a href="#about" className="group">
            About
            <div className="w-0 h-[1px] bg-[#6054aa] rounded-full group-hover:w-full transition-all duration-500"></div>
          </a>
          <a href="#schedule" className="group">
            Schedule
            <div className="w-0 h-[1px] bg-[#6054aa] rounded-full group-hover:w-full transition-all duration-500"></div>
          </a>
          <a href="#prizes" className="group">
            Prizes
            <div className="w-0 h-[1px] bg-[#6054aa] rounded-full group-hover:w-full transition-all duration-500"></div>
          </a>
          <a href="#gallery" className="group">
            Gallery
            <div className="w-0 h-[1px] bg-[#6054aa] rounded-full group-hover:w-full transition-all duration-500"></div>
          </a>
          <a href="#sponsors" className="group">
            Sponsors
            <div className="w-0 h-[1px] bg-[#6054aa] rounded-full group-hover:w-full transition-all duration-500"></div>
          </a>
          <a href="#faqs" className="group">
            FAQs
            <div className="w-0 h-[1px] bg-[#6054aa] rounded-full group-hover:w-full transition-all duration-500"></div>
          </a>
        </div>
        <div className="block md:hidden lg:hidden xl:hidden">
          <Drawer />
        </div>
      </div>
    </>
  );
};

export default Navbar;
