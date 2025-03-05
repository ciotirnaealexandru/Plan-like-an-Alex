import { GoHomeFill } from "react-icons/go";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { RiSettings3Fill } from "react-icons/ri";

const Navbar = ({ page }: { page: string }) => {
  return (
    <div className="fixed bottom-10 w-[calc(100%-48px)] px-6 h-16 bg-white rounded-2xl flex items-center justify-between">
      <GoHomeFill
        className={`w-8 h-8 ${
          page === "home" ? "text-[#745fff]" : "text-gray-300"
        } transition-colors duration-300`}
      />
      <FaCalendarCheck
        className={`w-7 h-7 ${
          page === "planner" ? "text-[#cf0f1f]" : "text-gray-300"
        } transition-colors duration-300`}
      />
      <FaDumbbell
        className={`w-8 h-8 ${
          page === "workout" ? "text-[#3726D1]" : "text-gray-300"
        } transition-colors duration-300`}
      />
      <MdAccessTimeFilled
        className={`w-8 h-8 ${
          page === "timetable" ? "text-[#16674B]" : "text-gray-300"
        } transition-colors duration-300`}
      />
      <RiSettings3Fill
        className={`w-8 h-8 ${
          page === "settings" ? "text-[#745fff]" : "text-gray-300"
        } transition-colors duration-300`}
      />
    </div>
  );
};

export default Navbar;
