import { FaCalendarCheck } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

const MainButtonsComponent = () => {
  return (
    <div className="w-full flex flex-col mt-4">
      <div className="flex items-center w-full custom-big-container-padding rounded-2xl bg-gradient-to-br from-[#e21123] to-[#f6b7d1]">
        <FaCalendarCheck className="custom-big-icon-size text-white" />
        <div className="text-white ml-8 custom-big-text-size font-semibold">
          PLANNER
        </div>
      </div>
      <div className="flex justify-between mt-4 gap-4">
        <div className="flex items-center w-full custom-small-container-padding rounded-2xl bg-gradient-to-br from-[#3726D1] to-[#b9d1ed]">
          <FaDumbbell className="custom-small-icon-size text-white" />
          <div className="custom-small-text-size text-white ml-4 font-semibold">
            WORKOUT
          </div>
        </div>
        <div className="flex items-center w-full custom-small-container-padding rounded-2xl bg-gradient-to-br from-[#16674B] to-[#b7f5da]">
          <MdAccessTimeFilled className="custom-small-icon-size text-white" />
          <div className="custom-small-text-size text-white ml-4 font-semibold">
            TIMETABLE
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainButtonsComponent;
