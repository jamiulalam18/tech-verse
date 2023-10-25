import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { successToast } from "./../Toasts/SuccessToast";
import { errorToast } from "./../Toasts/ErrorToast";

const SignInForms = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [errorclass, setErrorClass] = useState(
    "relative w-full min-w-[200px] hidden"
  );
  const [errorText, setErrorText] = useState(<></>);

  const setErrorDiv = (str) => {
    setErrorText(<h2>{str}</h2>);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Sign In");
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setErrorClass("relative w-full min-w-[200px] hidden");
        successToast("Successfully Signed In!!");
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        fetch(`https://b8a10-brandshop-server-side-jamiulalam18.vercel.app/usersByEmail/${email}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data?.email) {
              setErrorDiv("Incorrect Password!!!");
              setErrorClass("relative w-full min-w-[200px] block");
              errorToast("Incorrect Password!!!");
            } else {
              setErrorDiv("User account does not exist!!!");
              setErrorClass("relative w-full min-w-[200px] block");
              errorToast("User account does not exist!!!");
            }
          })
          .catch((error) => {
            console.error(error.message);
            setErrorDiv("User account does not exist!!!");
            setErrorClass("relative w-full min-w-[200px] block");
            errorToast("User account does not exist!!!");
          });

        // setErrorDiv("Invalid User Credentials!!!!");
        // setErrorClass("relative w-full min-w-[200px] block");
        // errorToast("Invalid User Credentials!!!");
      });
  };

  return (
    <div className="px-1 md:px-6 bg-white rounded-lg mt-2">
      <form
        onSubmit={handleSignIn}
        className="flex py-4   mb-2 w-80 sm:w-96 max-w-md flex-col gap-4 bg-white first-letter:"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            placeholder="name@techverse.com"
            required
            type="email"
            name="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" required type="password" name="password" />
        </div>
        <div className={errorclass}>
          <h2 className="text-red-700">{errorText}</h2>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Login</Button>
        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Need an account? &nbsp;
          <Link
            to={"/signup"}
            className="font-medium text-pink-500 transition-colors hover:text-700"
            href="#"
          >
            Sign Up Now!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInForms;
