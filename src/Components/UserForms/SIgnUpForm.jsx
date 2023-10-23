import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
const SIgnUpForm = () => {
  return (
    <div className="px-1 md:px-6 bg-white rounded-lg mt-2">
      <form className="flex max-w-md flex-col gap-4 py-4 mb-2 w-80 sm:w-96 bg-white first-letter:">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput
            id="name"
            placeholder="John Doe"
            required
            shadow
            type="text"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            placeholder="name@flowbite.com"
            required
            shadow
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="password2" required shadow type="password" />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label className="flex" htmlFor="agree">
            <p>I agree with the &nbsp;</p>
            <Link
              className="text-cyan-600 hover:underline dark:text-cyan-500"
              href="/forms"
            >
              <p> terms and conditions</p>
            </Link>
          </Label>
        </div>
        <Button type="submit">Register new account</Button>
        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Already have an account? &nbsp;
          <Link
            to={"/signin"}
            className="font-medium text-pink-500 transition-colors hover:text-700"
            href="#"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SIgnUpForm;
