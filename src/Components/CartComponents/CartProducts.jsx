import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import CartProduct from './CartProduct';
import { CartContext } from "../../Provider/CartProvider";
import { Link } from "react-router-dom";

const CartProducts = () => {
  const { user } = useContext(AuthContext);
  const {cartItemQty,cartItemPrice}=useContext(CartContext);
  const [shopping_cart,setShopping_cart]=useState();

  useEffect(() => {
    fetch(`https://b8a10-brandshop-server-side-jamiulalam18.vercel.app/usersByEmail/${user?.email}`)
        .then((response) => response.json())
        .then((data) => {
          const shopping_cart = data.shopping_cart;
          setShopping_cart(shopping_cart);
        })
        .catch((error) => {
          console.log(error);
        });
  },[user?.email]);

  return (
    <div>
      <div className="container mx-auto mt-10 ">
        <div className="flex flex-col md:flex-row shadow-md my-10 rounded-lg">
          <div className="w-full md:w-3/4 bg-white px-2 md:px-5 lg:px-10 py-10 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="text-2xl">{cartItemQty}&nbsp; Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Total
              </h3>
            </div>
            {shopping_cart?.map((product) => (
              <CartProduct
                key={product.product_id}
                product={product}
                setShopping_cart={setShopping_cart}
                shopping_cart={shopping_cart}
              ></CartProduct>
            ))}

            

            <Link
              to="/"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className="w-full md:w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items &nbsp; {cartItemQty}</span>
              <span className="font-semibold text-sm">{cartItemPrice}$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label className="font-semibold inline-block mb-3 text-sm uppercase">
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${parseFloat(cartItemPrice)+10.00}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
