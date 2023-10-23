import { useLoaderData } from "react-router-dom";
import UpdateProductForm from "../Components/UpdateProductForm/UpdateProductForm";

const UpdateProduct = () => {
    const product=useLoaderData();
  return (
    <div>
      <div className="max-w-screen-xl mx-auto pt-24">
        <div className="bg-white text-center rounded-lg py-4">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white underline underline-offset-4">
            Update the Product
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Please Edit the form and hit the update button below to update the
            product information.
          </p>
        </div>

        <UpdateProductForm product={product}></UpdateProductForm>
      </div>
    </div>
  );
};

export default UpdateProduct;
