import { New1 } from "./Nested Components/New1/New1";
const Schedule = () => {
  return (
    <div
      id="schedule"
      className="w-full mx-auto mt-24 flex flex-col gap-16 pb-20 md:w-11/12 lg:w-9/12 xl:w-9/12"
    >
      <h1 className="text-[#897be2] text-center text-[45px] uppercase font-bold hover:scale-110 transition-transform duration-300 z-10">
        Schedule
      </h1>
      <New1 />
    </div>
  );
};

export default Schedule;
