import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import BrandDetails from "../Pages/BrandDetails";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";
import ErrorPage from "../Pages/ErrorPage";
import ProductDetails from "../Pages/ProductDetails";
import UserCart from "../Pages/UserCart";

const CustomRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProducts",
        element: <h2>Add products</h2>,
      },
      {
        path: "/brandDetails/:id",
        element: <BrandDetails />,
        loader: ({ params }) => {
            return fetch(`http://localhost:5000/brandDetails/${params.id}`);
          },
      },
      {
        path: "/signin",
        element: <SignInPage></SignInPage>,
      },
      {
        path: "/signup",
        element: <SignUpPage></SignUpPage>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
        loader: ({ params }) => {
            return fetch(`http://localhost:5000/products/${params.id}`);
          },
      },
      {
        path: "/userCart/:id",
        element: <UserCart></UserCart>,
        loader: ({ params }) => {
            return fetch(`http://localhost:5000/users/${params.id}`);
          },
      },
    ],
  },
]);

export default CustomRoute;
