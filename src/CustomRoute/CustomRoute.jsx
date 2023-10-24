import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import BrandDetails from "../Pages/BrandDetails";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";
import ErrorPage from "../Pages/ErrorPage";
import ProductDetails from "../Pages/ProductDetails";
import UserCart from "../Pages/UserCart";
import AddProduct from "./../Pages/AddProduct";
import UpdateProduct from "../Pages/UpdateProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/brandDetails/:id",
        element: (
          <PrivateRoute>
            <BrandDetails></BrandDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          // return [fetch(`http://localhost:5000/brandDetails/${params.id}`),params.id];
          return fetch(`http://localhost:5000/brandDetails/${params.id}`);

          // const [brandProducts, brand_id] = Promise.all([
          //   fetch(`http://localhost:5000/brandDetails/${params.id}`),
          //   params.id,
          // ]);
          // return {brandProducts,brand_id}
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
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/products/${params.id}`);
        },
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/products/${params.id}`);
        },
      },
      {
        path: "/userCart/:id",
        element: (
          <PrivateRoute>
            <UserCart></UserCart>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/users/${params.id}`);
        },
      },
    ],
  },
]);

export default CustomRoute;
