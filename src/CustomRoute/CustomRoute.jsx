import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";

const CustomRoute = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    errorElement: <h2>Error page</h2>,
    children: [{
        path: '/',
        element:<Home></Home>
    },{
        path: '/addProducts',
        element: <h2>Add products</h2>
    }
]

}]);

export default CustomRoute;