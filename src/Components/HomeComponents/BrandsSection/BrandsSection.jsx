import { useEffect, useState } from "react";
import BrandsCard from "./BrandsCard";

const BrandsSection = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("https://b8a10-brandshop-server-side-jamiulalam18.vercel.app/brandInfo")
      .then((response) => response.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="mt-12">
      <div className="max-w-screen-xl rounded-xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center">
          Shop From Our Partner Brands
        </h2>
        <div className="rounded-xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
        {brands.map((brand) => (
          <BrandsCard key={brand._id} brand={brand}></BrandsCard>
        ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
