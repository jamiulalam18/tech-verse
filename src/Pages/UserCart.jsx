import { useLoaderData } from "react-router-dom";
import CartProducts from './../Components/CartComponents/CartProducts';
const UserCart = () => {
  const user = useLoaderData();
  return (
    <div>
      <h2 className="text-4xl font-bold pt-16">This is a fixed user cart {user._id}</h2>
      <div className="max-w-screen-xl mx-auto pt-24">
        <CartProducts user={user}></CartProducts>
      </div>
    </div>
  );
};

export default UserCart;
