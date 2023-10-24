/* eslint-disable react/prop-types */
// import { useContext, useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { CartContext } from "../../Provider/CartProvider";

const CartProduct = ({ product }) => {
  const { product_id, quantity } = product;

  // const {cartItemPrice, setCartItemPrice}=useContext(CartContext);

  const [productInfo, setProductInfo] = useState({});

  const { _id, product_image, product_name, brand_name, product_price } =
    productInfo;

  useEffect(() => {
    fetch(`http://localhost:5000/products/${product_id}`)
      .then((response) => response.json())
      .then((data) => {
        setProductInfo(data);

        // console.log(cartItemPrice);
        // setCartItemPrice(parseFloat(cartItemPrice.toFixed(2))+parseFloat((data.product_price*quantity).toFixed(2)));
        // setCartItemPrice(100);
        // console.log((data.product_price*quantity).toFixed(2));
        // console.log((parseFloat(total_price)+(parseFloat(data.product_price)*parseInt(quantity))).toFixed(2));
        // setTotal_price((parseFloat(total_price)+(parseFloat(data.product_price)*parseInt(quantity))).toFixed(2));
        // setTotal_price((total_price+(data.product_price*quantity).toFixed(2)));
      });
  }, [product_id]);

  return (
    <div className="flex items-center hover:bg-gray-100 md:-mx-8 p-1 md:px-6 py-5">
      <div className="flex w-2/5">
        {/* { <!-- product -->} */}
        <div className="w-20">
          <img className="h-20 rounded" src={product_image?.[0]} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <Link to={`/productDetails/${_id}`}>
            <span className="font-bold text-sm hover:text-blue-700">
              {product_name}
            </span>
          </Link>

          <span className="text-blue-800 text-xs">{brand_name}</span>
          {/* <a
            href="#"
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
          >
            Remove
          </a> */}
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        {/* <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg> */}

        <input
          className="mx-2 border text-xs md:text-sm text-center w-8 md:w-16"
          type="text"
          value={quantity}
        />

        {/* <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg> */}
      </div>
      <span className="text-center w-1/5 font-semibold text-xs md:text-sm">
        ${product_price}
      </span>
      <span className="text-center w-1/5 font-semibold text-xs md:text-sm">
        $<span>{(product_price * quantity).toFixed(2)}</span>
        {/* {
          setCartItemPrice(cartItemPrice+product_price * quantity)
        } */}
      </span>
    </div>
  );
};

export default CartProduct;
