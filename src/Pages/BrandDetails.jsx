// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BrandHeader from "../Components/BrandDetailsComponents/BrandHeader";
import BrandProducts from "../Components/BrandDetailsComponents/BrandProducts";

const BrandDetails = () => {
//   const [brandInfo, setBrandInfo] = useState([]);
  const brandProducts = useLoaderData();

//   useEffect(() => {
//     fetch(
//       `http://localhost:5000/brandInfoByName/${brandProducts?.[0].brand_name}`
//     )
//       .then((response) => response.json())
//       .then((data) => setBrandInfo(data));
//   }, [brandProducts]);

  return (
    <div className="pt-24 rounded-xl">
      <div className="max-w-screen-xl mx-auto">
        <BrandHeader brand_name={brandProducts?.[0].brand_name}></BrandHeader>
        <BrandProducts brand_products={brandProducts}></BrandProducts>
        
        {/* {brandProducts.map((brandProduct) => (
          <h2 key={brandProduct._id}>{brandProduct.product_name}</h2>
        ))} */}
      </div>
    </div>
  );
};

export default BrandDetails;
