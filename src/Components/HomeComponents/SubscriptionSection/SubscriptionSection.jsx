const SubscriptionSection = () => {
  return (
    <div className="mt-10">
      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 max-w-screen-xl mx-auto">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Subscribe for Newsletter and Flyers
        </h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Stay In the Loop: Subscribe Now for Exclusive Newsletters and Flyer
          Updates!
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Your email"
            className="border rounded-full lg:rounded-none lg:rounded-l-full py-2 px-4 w-full max-w-xs"
          />
          <button className="bg-[#344C5CBB] hover:bg-[#344C5C] text-white py-2 px-4 rounded-full lg:rounded-none lg:rounded-r-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;
