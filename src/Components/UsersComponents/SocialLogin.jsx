import { useContext } from "react";
import { AuthContext } from "./../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { successToast } from "../Toasts/SuccessToast";
import { errorToast } from "../Toasts/ErrorToast";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSocialLogin = (media) => {
    media()
      .then(() => {
        // navigate after login
        // console.log(location);
        successToast("Successfully Signed In!!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // alert(error.message);
        console.log(error.message);
        errorToast("Could Not Sign In!! Please Try Again Later");
      });
  };
  return (
    <div className="bg-white py-6 px-1 md:px-6 rounded-lg">
      <div className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <h4 className="block text-center font-sans text-2xl font-semibold leading-snug tracking-normal text-gray-900 antialiased">
            Continue With
          </h4>
          <div className="flex justify-between items-center gap-2 pt-3">
            <button
              onClick={() => handleSocialLogin(googleLogin)}
              className="bg-blue-500 shadow-lg w-full py-4 rounded-lg"
            >
              <div className="flex items-center gap-2 justify-center text-2xl font-extrabold">
                <span className="bg-white p-1 rounded-sm">
                  <FcGoogle></FcGoogle>
                </span>
                <span>Google</span>
              </div>
            </button>
            {/* <button className="bg-blue-500 shadow-lg w-full py-4 rounded-lg">
          <div className="flex items-center gap-2 justify-center text-2xl font-extrabold">
            <span className="bg-white p-1 rounded-sm text-blue-700">
              <BsFacebook></BsFacebook>
            </span>
            <span>Facebook</span>
          </div>
        </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
