import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full"> */}
        <Footer></Footer>
      {/* </div> */}
      <ToastContainer />
    </div>
  );
};

export default Root;
