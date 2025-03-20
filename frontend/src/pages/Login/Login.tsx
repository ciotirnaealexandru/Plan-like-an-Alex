import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { FaLessThan } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

// Define the type for the form data
interface FormData {
  email: string;
  password: string;
}

// Define the type for the error messages
interface FormErrors {
  email: string;
  password: string;
}

const GoToSignUp = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/signup");
  };

  return (
    <button
      type="button"
      onClick={handleRedirect}
      className="self-end flex items-center text-white mt-12">
      <div className="text-lg font-bold">Make an account</div>
      <FaLongArrowAltRight className="ml-4 text-2xl" />
    </button>
  );
};

const Login = () => {
  const API_URL = import.meta.env.VITE_API_URL.replace(/\/$/, "");
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    const newErrors: FormErrors = {
      email: "",
      password: "",
    };

    if (!formData.email) newErrors.email = "Email is required.";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.password) newErrors.password = "Password is required.";

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validate()) {
      try {
        const response = await axios.post(`${API_URL}/auth/login`, formData, {
          headers: { "Content-Type": "application/json" },
        });
        const { accessToken } = response.data;
        localStorage.setItem("token", accessToken);
        navigate("/home");
      } catch (error) {
        setErrors({ email: "", password: "Invalid credentials" });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-[Inter] w-screen h-screen bg-[#745fff] pt-15 px-6">
      <FaLessThan className="w-8 h-8 text-white" />
      <div className="text-white text-4xl font-bold mt-4">Login</div>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-4 flex flex-col"
        noValidate>
        <div className="bg-white w-full h-15 rounded-2xl flex flex-col py-2 px-5 mt-3">
          <div className="flex items-center gap-5">
            <label htmlFor="email" className="text-gray-400 text-md">
              Email
            </label>
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="focus:outline-none"
          />
        </div>

        <div className="bg-white w-full h-15 rounded-2xl flex flex-col py-2 px-5 mt-3">
          <div className="flex items-center gap-5">
            <label htmlFor="password" className="text-gray-400 text-md">
              Password
            </label>
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
          </div>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            className="focus:outline-none"
          />
        </div>

        <GoToSignUp />

        <button
          type="submit"
          className="w-full h-12 bg-white rounded-2xl text-[#745fff] font-bold text-2xl mt-4"
          disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "LOGIN"}
        </button>
      </form>
    </div>
  );
};

export default Login;
