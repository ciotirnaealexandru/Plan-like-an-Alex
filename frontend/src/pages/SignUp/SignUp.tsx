import { useState } from "react";
import { FaLessThan } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

// Define the type for the form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

// Define the type for the error messages
interface FormErrors {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    const newErrors: FormErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    };

    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    if (formData.phone && !/^\d{4} \d{3} \d{3}$/.test(formData.phone))
      newErrors.phone = "Format: XXXX XXX XXX.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password && formData.password.length < 6)
      newErrors.password = "Min. 6 characters.";
    else if (formData.password !== formData.confirmPassword)
      newErrors.password = "Passwords don't match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validate()) {
      console.log("Form submitted:", formData);
      // Here, you can handle actual form submission, like sending data to a server.
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-[Inter] w-screen h-screen bg-[#745fff] pt-15 px-6">
      <FaLessThan className="w-8 h-8 text-white" />
      <div className="text-white text-4xl font-bold mt-4">Sign Up</div>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-4 flex flex-col"
        noValidate>
        <div className="bg-white w-full h-15 rounded-2xl flex flex-col py-2 px-5">
          <div className="flex items-center gap-5">
            <label htmlFor="firstName" className="text-gray-400 text-md">
              First Name
            </label>
            {errors.firstName && (
              <p className="text-red-500 text-xs">{errors.firstName}</p>
            )}
          </div>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="focus:outline-none"
          />
        </div>

        <div className="bg-white w-full h-15 rounded-2xl flex flex-col py-2 px-5 mt-3">
          <div className="flex items-center gap-5">
            <label htmlFor="lastName" className="text-gray-400 text-md">
              Last Name
            </label>
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.lastName}</p>
            )}
          </div>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="focus:outline-none"
          />
        </div>

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
            <label htmlFor="tel" className="text-gray-400 text-md">
              Phone
            </label>
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone}</p>
            )}
          </div>
          <input
            type="text"
            id="phone"
            value={formData.phone}
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

        <div className="bg-white w-full h-15 rounded-2xl flex flex-col py-2 px-5 mt-3">
          <div className="flex items-center gap-5">
            <label htmlFor="confirmPassword" className="text-gray-400 text-md">
              Confirm Password
            </label>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
            )}
          </div>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="focus:outline-none"
          />
        </div>

        <div className="self-end flex items-center text-white mt-12">
          <div className="text-lg font-bold">Already have an account?</div>
          <FaLongArrowAltRight className="ml-4 text-2xl" />
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-white rounded-2xl text-[#745fff] font-bold text-2xl mt-4"
          disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "SIGN UP"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
