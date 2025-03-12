import ProfilePicture from "../../images/profile_picture.jpeg";
import "./Header.scss";

const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;
