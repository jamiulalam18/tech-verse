import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <h2>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </h2>
    </div>
  );
};

export default Root;
