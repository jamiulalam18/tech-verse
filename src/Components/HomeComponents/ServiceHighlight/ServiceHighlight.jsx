import { LiaShippingFastSolid } from "react-icons/lia";
import {RiRefund2Fill} from "react-icons/ri";
import {BiSupport} from "react-icons/bi";
import {RiSecurePaymentLine} from "react-icons/ri";
const ServiceHighlight = () => {
  return (
    <div className="mt-8">
      <div className=" max-w-screen-xl rounded-xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
          <div className="text-5xl flex justify-center mb-2">
            <LiaShippingFastSolid></LiaShippingFastSolid>
          </div>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Free Shipping Worldwide
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Enjoy Free Shipping Across the Globe on orders over{" "}
            <span className="font-bold">$50.00!</span>
          </p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
          <div className="text-5xl flex justify-center mb-2">
            <RiRefund2Fill></RiRefund2Fill>
          </div>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Return Policy
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Easy Returns, Hassle-Free and Transparent Return Policy!
          </p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
          <div className="text-5xl flex justify-center mb-2">
            <BiSupport></BiSupport>
          </div>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          24/7 Support
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Your Questions Answered Anytime with Our 24/7 Support!
          </p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
          <div className="text-5xl flex justify-center mb-2">
            <RiSecurePaymentLine></RiSecurePaymentLine>
          </div>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Secure Payments
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Experience Peace of Mind with Our Secure Payment Options!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlight;
