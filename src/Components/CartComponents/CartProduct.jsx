/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Provider/CartProvider";
import { successToast } from "./../Toasts/SuccessToast";
import { AuthContext } from "../../Provider/AuthProvider";
import { Button } from "flowbite-react";
import { Modal } from "flowbite-react";
import { errorToast } from "./../Toasts/ErrorToast";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const CartProduct = ({ product, setShopping_cart, shopping_cart }) => {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  const handleConfirmation = (e) => {
    e.preventDefault();
    props.setOpenModal("pop-up");
  };

  const handleNoConfirmation = () => {
    props.setOpenModal(undefined);
    errorToast("Product is not removed!!");
  };

  const { product_id, quantity } = product;
  const { user } = useContext(AuthContext);
  const { cartItemQty, setCartItemQty, cartItemPrice, setCartItemPrice } =
    useContext(CartContext);

  const [productInfo, setProductInfo] = useState({});

  const { _id, product_image, product_name, brand_name, product_price } =
    productInfo;

  useEffect(() => {
    fetch(
      `https://b8a10-brandshop-server-side-jamiulalam18.vercel.app/products/${product_id}`
    )
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

  const handleProductRemove = () => {
    // Check if there's an existing item with the same product_id
    const existingItemIndex = shopping_cart.findIndex(
      (item) => item.product_id === _id
    );
    const newCart = [
      ...shopping_cart.slice(0, existingItemIndex),
      ...shopping_cart.slice(existingItemIndex + 1),
    ];
    setCartItemQty(parseInt(cartItemQty) - parseInt(quantity));
    setCartItemPrice(
      (
        parseFloat(cartItemPrice) -
        parseFloat(parseInt(quantity) * parseFloat(product_price))
      ).toFixed(2)
    );
    setShopping_cart(newCart);

    // send data to the server
    fetch(
      `https://b8a10-brandshop-server-side-jamiulalam18.vercel.app/usersCartEmail/${user.email}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCart),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          successToast("Removed from Cart!!!");
        }
      });
  };

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
          <a
            onClick={handleConfirmation}
            className="font-semibold hover:text-red-500 text-gray-500 text-xs hover:cursor-pointer"
          >
            Remove
          </a>
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

      <Modal
        show={props.openModal === "pop-up"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to remove this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleProductRemove}>
                Yes, sure
              </Button>
              <Button color="gray" onClick={handleNoConfirmation}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CartProduct;
