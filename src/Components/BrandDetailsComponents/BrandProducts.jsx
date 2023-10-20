/* eslint-disable react/prop-types */
import BrandProduct from "./BrandProduct";

const BrandProducts = ({ brand_products }) => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {brand_products.map((brand_product) => (
        <BrandProduct
          key={brand_product._id}
          brand_product={brand_product}
        ></BrandProduct>
      ))}
    </div>
  );
};

export default BrandProducts;
