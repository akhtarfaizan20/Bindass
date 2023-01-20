import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CartPage from "./CartPage";
import ProductDetails from "./ProductDetails";
import Products from "./Products";
import Login from "./Login";
import Signup from "./Signup";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:target" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Product-details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
