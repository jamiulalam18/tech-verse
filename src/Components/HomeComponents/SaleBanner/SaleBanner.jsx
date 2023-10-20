import saleImage from "./../../../../public/blackFriday.jpg";
const SaleBanner = () => {
  return (
    <div className="mt-12">
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-screen-xl mx-auto">
        <figure className="lg:w-1/2 w-full">
          <img
            src={saleImage}
            alt="Album"
          />
        </figure>
        <div className="card-body flex flex-col items-center justify-center align-middle">
          <h2 className="card-title text-red-700 text-5xl font-extrabold">Coming Soon!</h2>
          <p className="pt-6 font-bold">Get Ready for Savings: Black Friday Sale Approaching - Stay Tuned for Exclusive Deals!</p>
        </div>
      </div>
    </div>
  );
};

export default SaleBanner;
