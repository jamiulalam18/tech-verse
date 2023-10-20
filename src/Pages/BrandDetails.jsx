import { useLoaderData } from "react-router-dom";

const BrandDetails = () => {
    const brandProducts =useLoaderData();
    return (
        <div className="pt-24 rounded-xl">
            <div className="max-w-screen-xl mx-auto">
            {brandProducts.map((brandProduct) => (
          <h2 key={brandProduct._id}>{brandProduct.product_name}</h2>
        ))}
            </div>
        </div>
    );
};

export default BrandDetails;