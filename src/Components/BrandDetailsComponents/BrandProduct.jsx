/* eslint-disable react/prop-types */
import Rating from "react-rating";
import {AiTwotoneStar, AiOutlineStar} from "react-icons/ai";

const BrandProduct = ({ brand_product }) => {
  // - Image
  // - Name
  // - Band Name
  // - Type
  // - Price
  // - Rating
  // - Details button
  // - Update button
  const {
    product_image,
    product_name,
    brand_name,
    product_category,
    product_price,
    product_rating,
  } = brand_product;

  function hover(element) {
    element.target.querySelector('img').setAttribute("src", product_image?.[1]);
  }

  function unhover(element) {
    element.target.querySelector('img').setAttribute("src", product_image?.[0]);
  }
  return (
    <div onMouseEnter={hover} onMouseLeave={unhover} className="h-full">
        <div className="card card-compact bg-base-100 shadow-xl h-full" >
      <figure className="p-2">
        <img id="card-img" className="h-60" src={product_image?.[0]} alt="Image"/>
      </figure>
      <div className="card-body m-1">
        <h2 className="font-bold">{brand_name}</h2>
        <h2 className="card-title text-2xl">{product_name}</h2>
        <p>{product_category}</p>
        <div className="flex items-center justify-start gap-1">
        <Rating className=""
            placeholderRating={product_rating}
            emptySymbol={
                <AiOutlineStar></AiOutlineStar>
            }
            placeholderSymbol={
                <AiTwotoneStar></AiTwotoneStar>
            }
            fullSymbol={
                <AiTwotoneStar></AiTwotoneStar>
            }
          />
          <p className="">({product_rating})</p>
        </div>
        <h2 className="text-right text-2xl font-extrabold">
            Price: $ {product_price}
        </h2>
        <div className="card-actions justify-between">
        <button className="btn btn-primary bg-[#d1637baa] hover:bg-[#d1637b] font-extrabold text-black border-none">Update content</button>
          <button className="btn btn-primary bg-[#ADCCD4AA] hover:bg-[#ADCCD4] font-extrabold text-black border-none">See Details</button>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default BrandProduct;
