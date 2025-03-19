import ProfilePicture from "../../images/profile_picture.jpeg";
import "./Header.scss";

interface HeaderProps {
  user: { firstName: string; lastName: string } | null;
}

const Header = ({ user }: HeaderProps) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let now = new Date();
  let weekDay = days[now.getDay()];
  let day = now.getDate();
  let month = months[now.getMonth()];
  let dateFormat = day + " " + month;

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <div className="text-gray-300 text-xl">{weekDay}</div>
          <div className="text-3xl font-bold">{dateFormat}</div>
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
        <div className="font-bold text-3xl">Hi {user?.firstName}.</div>
        <div className="text-gray-300 text-xl">let's keep you on track</div>
      </div>
    </>
  );
};

export default Header;
