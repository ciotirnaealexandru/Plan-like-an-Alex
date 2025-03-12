import Header from "./Header";
import MainButtonsComponent from "./MainButtonsComponent";
import RemindersComponent from "./RemindersComponent";
import Navbar from "../../components/NavBar";

const Home = () => {
  return (
    <div className="font-[Inter] w-screen h-screen flex flex-col px-6 pt-4 bg-gradient-to-t from-[#745fff] to-white to-15%">
      <Header />
      <MainButtonsComponent />
      <RemindersComponent />
      <Navbar page="home" />
    </div>
  );
};

export default Home;
