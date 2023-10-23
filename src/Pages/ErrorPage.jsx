import { ToastContainer } from "react-toastify";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import ErrorComponent from "../Components/ErrorComponent";

const ErrorPage = () => {
    return (
        <div className="min-h-screen relative">
      <Navbar></Navbar>
      <ErrorComponent></ErrorComponent>
      
      {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full"> */}
        <Footer></Footer>
      {/* </div> */}
      <ToastContainer />
    </div>
    );
};

export default ErrorPage;