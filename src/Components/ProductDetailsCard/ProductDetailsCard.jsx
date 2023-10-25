/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiTwotoneStar,
  AiOutlineStar,
  AiOutlineEdit,
} from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { successToast } from "./../Toasts/SuccessToast";
import { CartContext } from "../../Provider/CartProvider";


const ProductDetailsCard = ({ product_details }) => {
  
  
  const { user } = useContext(AuthContext);
  const {cartItemQty, setCartItemQty,cartItemPrice, setCartItemPrice}=useContext(CartContext);
  const {
    _id,
    product_image,
    product_name,
    brand_name,
    product_long_description,
    product_highlights,
    product_category,
    product_price,
    product_rating,
  } = product_details;

  const [mainPicture, setMainPicture] = useState(0);
  const [qty, setQty] = useState(1);
  const handleQtyChange = (e) => {
    setQty(parseInt(e.currentTarget.value));
  };
  const handleAddToCart = () => {
    
    fetch(`https://b8a10-brandshop-server-side-jamiulalam18.vercel.app/usersByEmail/${user.email}`)
      .then((response) => response.json())
      .then((data) => {
        const shopping_cart = data.shopping_cart;
        const newItem = { product_id: _id, quantity: qty, cost: parseFloat(parseFloat(product_price)*parseInt(qty)).toFixed(2)};
        console.log(newItem);

        // Check if there's an existing item with the same product_id
        const existingItemIndex = shopping_cart.findIndex(
          (item) => item.product_id === newItem.product_id
        );

        if (existingItemIndex !== -1) {
          // If the item already exists, update the quantity
          shopping_cart[existingItemIndex].quantity += newItem.quantity;
          shopping_cart[existingItemIndex].cost =parseFloat(parseFloat(shopping_cart[existingItemIndex].cost)+parseFloat(product_price*qty)).toFixed(2);
        } else {
          // If the item doesn't exist, add the new item to the array
          shopping_cart.push(newItem);
        }

        // send data to the server
        fetch(`https://b8a10-brandshop-server-side-jamiulalam18.vercel.app/usersCart/${data._id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(shopping_cart),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              successToast("Added To Cart!!!");
              setCartItemQty(cartItemQty+newItem.quantity);
              setCartItemPrice(parseFloat(parseFloat(cartItemPrice)+parseFloat(parseInt(newItem.quantity)*parseFloat(product_price))).toFixed(2));
            }
          });

        console.log(shopping_cart);
      });
  };

  return (
    <div className="mx-auto px-4 w-full max-w-7xl bg-white text-gray-700">
      <div className="flex flex-col lg:flex-row">
        {/* :PICTURES CONTAINER */}
        <div className="py-8 w-full lg:w-1/2 flex flex-col items-center">
          {/* ::Like Button */}
          <span className="self-start ml-10">
            <button className="text-gray-300 hover:text-red-500">
              <AiOutlineHeart className="w-10 h-10" />
            </button>
          </span>
          {/* ::Main Picture */}
          <div className="w-auto px-2 h-56 sm:h-72 lg:h-full max-h-96 overflow-hidden rounded-lg">
            <img
              src={product_image[mainPicture]}
              alt="product image"
              className="object-contain w-full h-full rounded-lg"
            />
          </div>
          {/* ::Gallery */}
          <div className="mt-6 mx-auto">
            <ul className="grid grid-flow-col auto-cols-fr gap-4">
              {product_image
                .slice(0, 2) // Here you can manage the number of pictures displayed
                .map((picture, index) => (
                  <li
                    key={index}
                    className={`col-span-1 p-1 w-16 rounded border-2 ${
                      index === mainPicture
                        ? "border-yellow-600"
                        : "border-transparent"
                    }`}
                  >
                    <button
                      type="button"
                      className="block h-full rounded overflow-hidden"
                      onClick={() => setMainPicture(index)}
                    >
                      <img
                        src={picture}
                        alt="Product Image"
                        className="object-contain"
                      />
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* :PRODUCT DETAILS */}
        <div className="lg:py-8 w-full lg:w-1/2 flex flex-col lg:border-l-2 border-gray-200">
          {/* ::Description Container */}
          <div className="order-3 lg:order-1 pb-5 sm:px-6 lg:border-b-2 border-gray-200">
            {/* :::Name */}
            <h1 className="font-extrabold hidden lg:block">{brand_name}</h1>
            <h1 className="hidden lg:block text-4xl text-gray-700 font-light tracking-wide">
              {product_name}
            </h1>
            <h1 className="font-light hidden lg:block">{product_category}</h1>
            {/* :::Description */}
            <p className="mt-10 text-base text-gray-500">
              {product_long_description}
            </p>
            {/* :::Features */}
            <ul className="my-5 flex flex-col space-y-2">
              {product_highlights.map((feature, index) => (
                <li
                  key={index}
                  className="inline-flex items-center space-x-2 text-gray-500"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                  <span className="text-sm font-semibold">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ::Customization Container */}
          <div className="order-1 lg:order-2 py-8 sm:px-6 border-b-2 border-gray-200">
            {/* :::Name */}
            <h1 className="font-extrabold lg:hidden">{brand_name}</h1>
            <h1 className="mb-5 block lg:hidden text-3xl sm:text-4xl text-gray-700 font-light tracking-wide">
              {product_name}
            </h1>
            <h1 className="font-light lg:hidden">{product_category}</h1>
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Rating */}
              <div className="flex items-center justify-start gap-1">
                <Rating
                  className=""
                  placeholderRating={product_rating}
                  emptySymbol={<AiOutlineStar></AiOutlineStar>}
                  placeholderSymbol={<AiTwotoneStar></AiTwotoneStar>}
                  fullSymbol={<AiTwotoneStar></AiTwotoneStar>}
                />
                <p className="">({product_rating})</p>
              </div>

              {/* :::Price */}
              <span className="m-2.5 text-4xl text-gray-500 font-extrabold">
                <span className="font-normal">$</span>
                {product_price}
              </span>
              {/* :::Quantity */}
              {/* <label htmlFor="quantity" className="sr-only">
                Select the quantity
              </label> */}
              <div className="flex justify-start items-center">
                <h1 className="font-bold">Qty:</h1>
                <input
                  onChange={handleQtyChange}
                  type="number"
                  defaultValue="1"
                  min="1"
                  id="qty"
                  name="qty"
                  className="form-input py-1 pl-2 w-20 rounded border-2 border-gray-300 bg-gray-100 focus:border-yellow-600 focus:ring-0"
                />
              </div>
              {/* <input
                type="number"
                defaultValue="1"
                min="1"
                className="form-input py-1 pl-2 w-20 rounded border-2 border-gray-300 bg-gray-100 focus:border-yellow-600 focus:ring-0"
              /> */}
              {/* :::Color */}
              {/* <label htmlFor="color" className="sr-only">
                Select your color
              </label> */}
              {/* <select
                name="color"
                id="color"
                className="form-select py-1 pl-2 w-full max-w-xs rounded border-2 border-gray-300 bg-gray-100 text-gray-500 focus:border-yellow-600 focus:ring-0"
              >
                <option value="">Color</option>
                {product.colors.map((color) => (
                  <option value={color.name}>{color.name}</option>
                ))}
              </select> */}
              {/* :::Size */}
              {/* <label htmlFor="size" className="sr-only">
                Select your size
              </label> */}
              {/* <select
                name="size"
                id="size"
                className="form-select py-1 pl-2 w-full max-w-xs rounded border-2 border-gray-300 bg-gray-100 text-gray-500 focus:border-yellow-600 focus:ring-0"
              >
                <option value="">Size</option>
                {product.sizes.map((size) => (
                  <option value={size.name}>{size.name}</option>
                ))}
              </select> */}
            </div>
          </div>

          {/* ::Actions Container */}
          <div className="order-2 lg:order-3 pt-8 sm:px-6 flex flex-wrap lg:flex-nowrap justify-between items-center border-b-2 lg:border-none border-gray-200">
            {/* Update */}
            <Link to={`/updateProduct/${_id}`}>
              <button
                type="button"
                className="m-2.5 py-1.5 px-5 inline-flex items-center rounded-md text-base uppercase whitespace-nowrap bg-[#d1637baa] hover:bg-[#d1637b] font-extrabold text-black border-none"
              >
                <AiOutlineEdit></AiOutlineEdit>
                &nbsp;&nbsp;&nbsp;Update Product
              </button>
            </Link>

            {/* :::Add to cart button */}
            <button
              onClick={handleAddToCart}
              type="button"
              className="m-2.5 py-1.5 px-5 inline-flex items-center rounded-md text-base uppercase whitespace-nowrap bg-[#ADCCD4AA] hover:bg-[#ADCCD4] font-extrabold text-black border-none"
            >
              <AiOutlineShopping className="mr-3 w-6 h-6" />
              Add to cart
            </button>

            {/* :::Reviews */}
            {/* <div className="m-2.5 flex items-center"> */}
            {/* ::::rating stars */}
            {/* <div className="flex items-center space-x-1"> */}
            {/* full stars */}
            {/* {[...Array(pro)].map((star, index) => (
                  <span key={index} className="flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  </span>
                ))} */}
            {/* half star */}
            {/* {isHalfStar && (
                  <span className="flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                    </svg>
                  </span>
                )} */}
            {/* empty stars */}
            {/* {[...Array(emptyStars)].map((star, index) => (
                  <span key={index} className="flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                    </svg>
                  </span>
                ))} */}
            {/* </div> */}
            {/* ::::all reviews */}
            {/* <a
                href={product.hrefReviews}
                className="ml-2 text-sm text-sky-400 font-medium tracking-wide hover:text-sky-500 hover:underline"
              >{`${product.reviews} reviews`}</a> */}
          </div>
        </div>
      </div>


      
    </div>
    // </div>
  );
};

export default ProductDetailsCard;
