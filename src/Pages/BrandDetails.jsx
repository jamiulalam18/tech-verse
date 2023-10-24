// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandHeader from "../Components/BrandDetailsComponents/BrandHeader";
import BrandProducts from "../Components/BrandDetailsComponents/BrandProducts";
import { useEffect, useState } from "react";
import NoProduct from "../Components/BrandDetailsComponents/NoProduct";

const BrandDetails = () => {
  const [brandName, setBrandName] = useState("");
  // const brandId = useLoaderData();

  // const {brandProducts,brand_id} = useLoaderData();
  const brandProducts = useLoaderData();
  let { id } = useParams();
  // console.log(brandProducts.length);

  useEffect(() => {
    fetch(`http://localhost:5000/brandInfo/${id}`)
      .then((response) => response.json())
      .then((data) => setBrandName(data.brand_name));
  }, [id]);

  return (
    <div className="pt-24 rounded-xl">
      <div className="max-w-screen-xl mx-auto">
        <BrandHeader brand_name={brandName}></BrandHeader>
        {brandProducts.length ? (
          <BrandProducts brand_products={brandProducts}></BrandProducts>
        ) : (
          <NoProduct></NoProduct>
        )}
        {/* <BrandProducts brand_products={brandProducts}></BrandProducts> */}

        {/* {brandProducts.map((brandProduct) => (
          <h2 key={brandProduct._id}>{brandProduct.product_name}</h2>
        ))} */}
      </div>
    </div>
  );
};

export default BrandDetails;
