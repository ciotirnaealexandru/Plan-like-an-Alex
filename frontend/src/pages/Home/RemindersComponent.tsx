import "./RemindersComponent.scss";
import { FaPlus } from "react-icons/fa";

const RemindersComponent = () => {
  return (
    <div className="mt-8 flex flex-col">
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <div className="text-3xl font-bold">Reminders</div>
          <div className="bg-[#745FFF] flex justify-center items-center h-6 w-6 rounded-xl">
            <FaPlus className="text-white" />
          </div>
        </div>
        <div className="text-[#745FFF] text-xl">8 reminders pending</div>
      </div>

      <div className="mt-4 w-full h-50 border-2 pl-4 pr-2 py-1 border-[#745FFF] rounded-xl">
        <div className="w-full h-full overflow-y-auto add-custom-scrollbar pr-5">
          <Reminder text="Fa task-ul ala scurt" />
          <Reminder text="Ok deci asta e un task cam lung, gen f lung, atat de lung gen asa lung cat gen gen gen gen sa se vada gen cat de lung e textul, gen" />
          <Reminder text="Fa task-ul ala scurt... din nou" />
          <Reminder text="Ok deci asta e un task cam lung, gen f lung, atat de lung gen asa lung cat gen gen gen gen sa se vada gen cat de lung e textul, gen" />
          <Reminder text="Ok deci asta e un task cam lung, gen f lung, atat de lung gen asa lung cat gen gen gen gen sa se vada gen cat de lung e textul, gen" />
          <Reminder text="Fa task-ul ala scurt... din nou" />
          <Reminder text="Ok deci asta e un task cam lung, gen f lung, atat de lung gen asa lung cat gen gen gen gen sa se vada gen cat de lung e textul, gen" />
          <Reminder text="Ok deci asta e un task cam lung, gen f lung, atat de lung gen asa lung cat gen gen gen gen sa se vada gen cat de lung e textul, gen" />
        </div>
      </div>
    </div>
  );
};

const Reminder = ({ text }: { text: string }) => {
  return (
    <div className="mb-3 flex align-top gap-4">
      <div>
        <div className="size-6 border-2 border-[#745FFF] rounded-xl"></div>
      </div>
      <div className="font-medium">{text}</div>
    </div>
  );
};

export default RemindersComponent;
