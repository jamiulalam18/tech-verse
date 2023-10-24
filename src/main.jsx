import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import CustomRoute from "./CustomRoute/CustomRoute.jsx";
import AuthProvider from "./Provider/AuthProvider";
import CartProvider from "./Provider/CartProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={CustomRoute}></RouterProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
