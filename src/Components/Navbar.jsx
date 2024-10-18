import { useState, useEffect } from 'react';
import Drawer from "./Nested Components/Drawer/Drawer";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll',
        handleScroll);
    };
  }, []);

  return (
    <>
      <div id="navbar" className={ isSticky ? 'fixed w-full mx-auto flex justify-between items-center text-[#ddd] pt-4 bg-[#111] z-50 transition-all duration-200 md:justify-around lg:justify-around xl:justify-around' : 'static w-full mx-auto flex justify-around items-center text-[#ddd] pt-4 z-10'}>
        <a href="https://www.istemanit.in/" target="blank" className=" z-10">
          <img src="/Images/Logo.svg" alt="logo" loading="lazy" />
        </a>
        <div className="items-center hidden md:flex lg:flex xl:flex gap-2 md:gap-4 lg:gap-6 xl:gap-10 font-medium text-xl z-10">
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
