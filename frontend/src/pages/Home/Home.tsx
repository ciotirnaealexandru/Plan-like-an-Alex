import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import MainButtonsComponent from "./MainButtonsComponent";
import RemindersComponent from "./RemindersComponent";
import Navbar from "../../components/NavBar";

interface User {
  firstName: string;
  lastName: string;
}

const Home = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found. User is not authenticated.");
          return;
        }

        const userResponse = await axios.get(`${API_URL}/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`, // Send JWT token in the Authorization header
          },
        });

        // Check if the response status is OK (200-299)
        if (userResponse.status < 200 || userResponse.status >= 300) {
          throw new Error("Failed to fetch user data.");
        }

        // Axios automatically parses the response as JSON, so we can access the data directly
        const userData = userResponse.data;

        const mappedUser: User = {
          firstName: userData.firstName,
          lastName: userData.lastName,
        };

        setUser(mappedUser);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchUserData()]);
    };

    fetchData();
  }, []);

  return (
    <div className="font-[Inter] w-screen h-screen flex flex-col px-6 pt-4 bg-gradient-to-t from-[#745fff] to-white to-15%">
      <Header user={user} />
      <MainButtonsComponent />
      <RemindersComponent />
      <Navbar page="home" />
    </div>
  );
};

export default Home;
