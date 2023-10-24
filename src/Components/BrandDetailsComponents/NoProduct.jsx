import { Link } from "react-router-dom";

const NoProduct = () => {
  return (
    <div className="pt-6">
      <section className="bg-white dark:bg-gray-900 max-w-screen-xl mx-auto rounded-lg">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-2xl tracking-tight font-extrabold lg:text-4xl text-primary-600 dark:text-primary-500">
              New Products Coming soon...
            </h1>
            <p className="mb-4 text-xl tracking-tight font-bold text-gray-900 md:text-2xl dark:text-white">
              Check back later.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              You&apos;ll find lots to
              explore on the home page.{" "}
            </p>
            <Link
              to="/"
              className="inline-flex text-white bg-[#344C5CAA] hover:bg-[#344C5C] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoProduct;
