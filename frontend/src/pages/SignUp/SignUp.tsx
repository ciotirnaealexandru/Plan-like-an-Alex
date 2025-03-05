import { FaLessThan } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="font-[Inter] w-screen h-screen bg-[#745fff] pt-15 px-6">
      <FaLessThan className="w-8 h-8 text-white" />
      <div className="text-white text-4xl font-bold mt-4">Sign Up</div>
      <form
        action="/signup"
        method="POST"
        className="w-full h-full mt-4 flex flex-col">
        <div className="bg-white w-full h-15 rounded-2xl flex flex-col py-2 px-5">
          <label htmlFor="firstName" className="text-gray-400 text-md">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            required
            className="focus:outline-none"
          />
        </div>

        <div className="bg-white w-full h-15 rounded-2xl flex flex-col py-2 px-5 mt-3">
          <label htmlFor="lastName" className="text-gray-400 text-md">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            required
            className="focus:outline-none"
          />
        </div>

        <div className="bg-white w-full h-15 rounded-2xl flex flex-col py-2 px-5 mt-3">
          <label htmlFor="email" className="text-gray-400 text-md">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="focus:outline-none"
          />
        </div>

        <div className="bg-white w-full h-15 rounded-2xl flex flex-col py-2 px-5 mt-3">
          <label htmlFor="phone" className="text-gray-400 text-md">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            required
            className="focus:outline-none"
          />
        </div>

        <div className="bg-white w-full h-15 rounded-2xl flex flex-col py-2 px-5 mt-3">
          <label htmlFor="password" className="text-gray-400 text-md">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            className="focus:outline-none"
          />
        </div>

        <div className="bg-white w-full h-15 rounded-2xl flex flex-col py-2 px-5 mt-3">
          <label htmlFor="confirmPassword" className="text-gray-400 text-md">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            required
            className="focus:outline-none"
          />
        </div>

        <div className="self-end flex items-center text-white mt-12">
          <div className="text-lg font-bold">Already have an account?</div>
          <FaLongArrowAltRight className="ml-4 text-2xl" />
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-white rounded-2xl text-[#745fff] font-bold text-2xl mt-4">
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default SignUp;
