/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartItemQty, setCartItemQty] = useState(0);
  const [cartItemPrice, setCartItemPrice] = useState(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://b8a10-brandshop-server-side-jamiulalam18.vercel.app/usersByEmail/${user?.email}`)
        .then((response) => response.json())
        .then((data) => {
          const shopping_cart = data.shopping_cart;
          setCart(shopping_cart);
          const totalQuantity = shopping_cart.reduce(
            (accumulator, currentItem) => {
              return accumulator + currentItem.quantity;
            },
            0
          );
          setCartItemQty(totalQuantity);

          // let totalCost = 0;
          // console.log(totalCost);
          // shopping_cart.map((cartItem) => {
          //   totalCost =
          //     parseFloat(totalCost) + parseFloat(cartItem.cost).toFixed(2);
          //   console.log(parseFloat(cartItem.cost).toFixed(2));
          //   console.log("gd");
          // });

          // const totalCost = shopping_cart.reduce((accumulator, currentItem) => {
          //   return accumulator + currentItem.cost;
          // }, 0);
          const totalCost = shopping_cart.reduce((accumulator, currentItem) => {
            // Parse the cost string to a float and add it to the accumulator
            return accumulator + parseFloat(currentItem.cost);
          }, 0);
          console.log(totalCost);
          setCartItemPrice(totalCost);
        })
        .catch((error) => {
          console.log(error);
          setCart([]);
          setCartItemPrice(0);
          setCartItemQty(0);
        });
    } else {
      setCart([]);
      setCartItemPrice(0);
      setCartItemQty(0);
    }
  }, [user]);

  const cartInfo = {
    cart,
    setCart,
    cartItemQty,
    setCartItemQty,
    cartItemPrice,
    setCartItemPrice,
  };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
