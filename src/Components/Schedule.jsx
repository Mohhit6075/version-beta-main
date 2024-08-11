import { Slide } from "react-awesome-reveal";
const Schedule = () => {
  return (
    <div
      id="schedule"
      className="w-full mx-auto mt-24 flex flex-col gap-16 pb-20 md:w-11/12 lg:w-9/12 xl:w-9/12"
    >
      <h1 className="text-[#897be2] text-center text-[45px] uppercase font-bold hover:scale-110 transition-transform duration-300">
        Schedule
      </h1>
      <Slide cascade damping={0.3} direction="left" triggerOnce>
        <div className="relative">
          <div className="flex justify-start ml-2">
            <img src="/Images/Group 13.svg" alt="" loading="lazy" />
          </div>
          <div className="absolute scale-90 md:scale-100 lg:scale-100 xl:scale-100 top-1 md:top-4 lg:top-4 xl:top-4  left-16 right-2 md:right-0 lg:right-0 xl:right-0 md:left-32 border border-[#897be2] rounded-lg lg:w-[80%] xl:w-[60%] w-fit p-4 py-6 hover:bg-[#1e1e20] hover:backdrop-blur-md hover:bg-opacity-30 transition-all duration-300">
            <h1 className="w-full text-[#8198AF] text-3xl flex items-center justify-between">
              <span className="w-fit">Registration</span>
              <div className="h-[1px] w-full bg-[#897be2] relative left-4"></div>
            </h1>
            <p className="text-[#ccc] text-[13px] mt-4 font-normal">
              Version Beta is opening its doors for applications starting from
              August 20th until October 5th.To apply, all you need to do is to
              click on the “Register Here” Button above and fill the
              registration form. After the registration process is compeleted, A
              rundown of shortlisted candidates for the hack will be declared.
            </p>
          </div>

          <div className="absolute scale-90 md:scale-100 lg:scale-100 xl:scale-100 top-[275px] left-16 right-2 md:right-0 lg:right-0 xl:right-0 md:left-32 border border-[#897be2] rounded-lg lg:w-[80%] xl:w-[60%] w-fit p-4 py-6 hover:bg-[#1e1e20] hover:backdrop-blur-md hover:bg-opacity-30 transition-all duration-300">
            <h1 className="w-full text-[#8198AF] text-3xl flex items-center justify-between">
              <span className="w-fit">Ideation</span>
              <div className="h-[1px] w-full bg-[#897be2] relative left-4"></div>
            </h1>
            <p className="text-[#ccc] text-[13px] mt-4 font-normal">
              Dive deep into current tech trends and challenges. Draw
              inspiration from industry leaders, innovative startups, and
              emerging technologies. Use brainstorming sessions to generate a
              plethora of ideas, no matter how wild or ambitious.
            </p>
          </div>

          <div className="absolute scale-90 md:scale-100 lg:scale-100 xl:scale-100 top-[380px] md:top-96 lg:top-96 xl:top-96 translate-y-52 left-16 right-2 md:right-0 lg:right-0 xl:right-0 md:left-32 border border-[#897be2] lg:w-[80%] xl:w-[60%] rounded-lg w-fit p-4 py-6 hover:bg-[#1e1e20] hover:backdrop-blur-md hover:bg-opacity-30 transition-all duration-300">
            <h1 className="w-full text-[#8198AF] text-3xl flex items-center justify-between">
              <span className="w-fit">Annoucement</span>
              <div className="h-[1px] w-full bg-[#897be2] relative left-4"></div>
            </h1>
            <p className="text-[#ccc] text-[13px] mt-4 font-normal">
              After intense brainstorming and collaboration, Best ideas would be
              selected by judges, Their creativity and problem-solving skills
              have set the stage for the next challenge.
            </p>
          </div>
          <div className="absolute scale-90 md:scale-100 lg:scale-100 xl:scale-100 bottom-[218px] md:bottom-[256px] lg:bottom-[256px] xl:bottom-[256px] left-16 right-2 md:right-0 lg:right-0 xl:right-0 md:left-32 border border-[#897be2] rounded-lg lg:w-[80%] xl:w-[60%] w-fit p-4 py-6 hover:bg-[#1e1e20] hover:backdrop-blur-md hover:bg-opacity-30 transition-all duration-300">
            <h1 className="w-full text-[#8198AF] text-3xl flex items-center justify-between">
              <span className="w-fit">Team</span>
              <div className="h-[1px] w-full bg-[#897be2] relative left-4"></div>
            </h1>
            <p className="text-[#ccc] text-[13px] mt-4 font-normal">
              Collaboration is key as students bring together their unique
              skills and expertise. Enlist your teams and prepare them to tackle
              the upcoming challenges. Get ready to synergize and innovate with
              your peers as the codathon journey continues!
            </p>
          </div>
          <div className="absolute scale-90 md:scale-100 lg:scale-100 xl:scale-100 -bottom-9 md:bottom-0 lg:bottom-0 xl:bottom-0 translate-y-2 left-16 right-2 md:right-0 lg:right-0 xl:right-0 md:left-32 border border-[#897be2] rounded-lg lg:w-[80%] xl:w-[60%] w-fit p-4 py-6 hover:bg-[#1e1e20] hover:backdrop-blur-md hover:bg-opacity-30 transition-all duration-300">
            <h1 className="w-full text-[#8198AF] text-3xl flex items-center justify-between">
              <span className="w-fit">Hackathon</span>
              <div className="h-[1px] w-full bg-[#897be2] relative left-4"></div>
            </h1>
            <p className="text-[#ccc] text-[13px] mt-4 font-normal">
              Every truly novel concept appears insane at first, so come present
              yours. The time for brainstorming is past; now is the time to code
              and present hackathon presentations.
            </p>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Schedule;
