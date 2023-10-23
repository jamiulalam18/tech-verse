import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignInForms = () => {
  return (
    <div className="px-1 md:px-6 bg-white rounded-lg mt-2">
      <form className="flex py-4   mb-2 w-80 sm:w-96 max-w-md flex-col gap-4 bg-white first-letter:">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            placeholder="name@techverse.com"
            required
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" required type="password" />
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
