import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import BrandDetails from "../Pages/BrandDetails";

const CustomRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h2>Error page</h2>,
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
            console.log(`http://localhost:5000/brandDetails/${params.id}`);
            return fetch(`http://localhost:5000/brandDetails/${params.id}`);
          },
      },
    ],
  },
]);

export default CustomRoute;
