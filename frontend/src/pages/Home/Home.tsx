import "./Home.scss";
import RemindersComponent from "./RemindersComponent";
import Navbar from "../../components/NavBar";

import { FaCalendarCheck } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

import ProfilePicture from "../../images/profile_picture.jpeg";

const Home = () => {
  return (
    <div className="font-[Inter] w-screen h-screen flex flex-col px-6 pt-5 bg-gradient-to-t from-[#745fff] to-white to-15%">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <div className="text-gray-300 text-xl">Monday</div>
          <div className="text-3xl font-bold">25 October</div>
        </div>
        <div className="w-15 h-15 rounded-xl bg-gradient-to-br from-red-600 via-purple-300 to-green-600">
          <div className="bg-white m-0.75 rounded-xl">
            <img
              className="rounded-xl p-1"
              src={ProfilePicture}
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="font-bold text-3xl">Hi Alex.</div>
        <div className="text-gray-300 text-xl">let's keep you on track</div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex items-center w-full custom-big-container-padding rounded-2xl bg-gradient-to-br from-[#cf0f1f] to-[#e1b3c6]">
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

      <RemindersComponent />

      <Navbar page="home" />
    </div>
  );
};

export default Home;
