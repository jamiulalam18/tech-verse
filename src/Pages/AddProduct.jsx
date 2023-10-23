import AddProductForm from "../Components/AddProductForm/AddProductForm";

const AddProduct = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto pt-24">
        <div className="bg-white text-center rounded-lg py-4">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white underline underline-offset-4">
            Add New Product
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Please fill up the form and hit the add button below to add a new product.
          </p>
        </div>
        
        <AddProductForm></AddProductForm>
      </div>
    </div>
  );
};

export default AddProduct;
