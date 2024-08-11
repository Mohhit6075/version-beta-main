import { Slide } from "react-awesome-reveal";
const Footer = () => {
  return (
    <div className="w-10/12 xl:w-9/12 mx-auto mt-24 pt-10 flex flex-col gap-16 relative">
      <Slide cascade damping={0.3} direction="left" triggerOnce>
        <div className="w-full flex flex-col gap-10 lg:flex-row xl:flex-row justify-around">
          <div>
            <h1 className="text-[#897be2] text-[40px] font-semibold hover:scale-110 transition-transform duration-300">
              Contact Us
            </h1>
            <div className="flex mt-10 gap-10 items-center">
              <img src="/Images/phone.svg" alt="" className="w-10 h-10 scale-90" />
              <div className="">
                <div className="text-[#B5B5B6] hover:text-[#897be2] text-base font-medium flex flex-col sm:flex-row gap-1 md:gap-6 lg:gap-6 xl:gap-12 transform-colors duration-200">
                  <p>Akshat Maheshwari</p>
                  <a href="tel:+917440411306">+91 7440411306</a>
                </div>
                  <div className="text-[#B5B5B6] hover:text-[#897be2] text-base font-medium flex flex-col sm:flex-row gap-1 md:gap-12 lg: xl:gap-24 mt-2 transform-colors duration-200">
                  <p>Suhaani Batra</p>
                  <a href="tel:+916263302087">+91 6263302087</a>
                </div>
              </div>
            </div>
            <div className="flex mt-10 gap-10 items-center">
              <img src="/Images/location.svg" alt="" className="w-10 h-10 scale-90" />
              <p className="text-[#B5B5B6] hover:text-[#897be2] text-base font-medium transform-colors duration-200">
                Maulana Azad National Institute <br />
                of Technology Bhopal, 462003 (M.P.)
              </p>
            </div>
            <div className="flex mt-10 gap-10 items-center">
              <img src="/Images/mail.svg" alt="" className="w-10 h-10 scale-90" />
              <a href="mailto:istescmanit@gmail.com" className="text-[#B5B5B6] hover:text-[#897be2] text-base font-medium transform-colors duration-200">
                istescmanit@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-auto hidden lg:block xl:block">
            <svg
              width="1"
              height="272"
              viewBox="0 0 1 272"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0.5" y1="271.017" x2="0.5" stroke="#444" />
            </svg>
          </div>
          <div>
            <h1 className="text-[#897be2] text-[40px] font-semibold hover:scale-110 transition-transform duration-300">
              Social Links
            </h1>
            <div className="flex flex-col justify-between">
              <a
                className="flex mt-10 gap-10 items-start group relative"
                href="https://www.instagram.com/istemanit/"
                target="blank"
              >
                <img
                  src="/Images/instagram-svg.png"
                  alt=""
                  className="w-9 h-9 relative group-hover:opacity-0 transition-opacity duration-300"
                />
                <img
                  src="/Images/instagram.png"
                  alt=""
                  className="w-9 h-9 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <p className="text-[#B5B5B6] text-xl font-medium relative right-3 group-hover:text-[#7661ff] transition-colors duration-300">
                  Instagram
                </p>
              </a>
              <a
                className="flex mt-10 gap-10 items-start group"
                href="https://www.facebook.com/ISTESCMANIT"
                target="blank"
              >
                <img
                  src="/Images/facebook-svg.svg"
                  alt=""
                  className="w-9 h-9 relative rounded-sm group-hover:opacity-0 transition-opacity duration-300"
                />
                <img
                  src="/Images/facebook.svg"
                  alt=""
                  className="w-9 h-9 absolute rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <p className="text-[#B5B5B6] text-xl font-medium relative right-3 group-hover:text-[#7661ff] transition-colors duration-300">
                  Facebook
                </p>
              </a>
              <a
                className="flex mt-9 gap-10 -ml-[2px] items-center group"
                href="https://www.linkedin.com/company/iste-sc-manit/"
                target="blank"
              >
                <img
                  src="/Images/linkedin-svg.svg"
                  alt=""
                  className="w-[50px] h-[50px] relative right-1 group-hover:opacity-0 transition-opacity duration-300"
                />
                <img
                  src="/Images/linkedin.svg"
                  alt=""
                  className="w-[50px] h-[50px] absolute opacity-0 -translate-x-1 group-hover:opacity-100 transition-opacity duration-300"
                />
                <p className="text-[#B5B5B6] text-xl relative right-6 font-medium group-hover:text-[#7661ff] transition-colors duration-300">
                  LinkedIn
                </p>
              </a>
            </div>
          </div>
          <a
            href="#navbar"
            className="bg-[#222] absolute p-1 rounded-md right-0 opacity-0 md:opacity-100 lg:opacity-100 xl:opacity-100 lg:absolute xl:absolute md:-right-10 top-28 hover:bg-black hover:shadow-[0_0_1rem_#6054aa] transition-colors duration-200 animate-bounce"
          >
            <img src="/Images/up.svg" alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="text-[#B5B5B6] mt-4">
          <div className="bg-[#444] h-[1px] w-full"></div>
          <div className="mt-4 flex justify-around text-base font-medium">
            <a
              href="https://devfolio.co/code-of-conduct"
              target="blank"
              className="hover:text-[#7661ff] transition-all duration-300"
            >
              Code of Conduct Devfolio
            </a>
            <a
              href="/Images/VBrulebook-2023.pdf"
              target="blank"
              className="hover:text-[#7661ff] transition-all duration-300"
            >
              Rule Book
            </a>
          </div>
        </div>

        <div className="text-center -mt-12 pb-8">
          <div className="bg-[#444] h-[1px] w-full mb-4"></div>
          <div className=" text-[#B5B5B6] text-center font-medium">
            Copyright © 2023 by{" "}
            <a
              href="https://www.istemanit.in/"
              target="blank"
              className="text-[#7661ff] transition-all duration-300"
            >
              ISTE-SC MANIT
            </a>
            . All rights reserved.
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Footer;
