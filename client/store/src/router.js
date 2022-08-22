import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Produts from "./pages/Produts";
import NewProduct from "./pages/NewProduct";
import EditProduct from "./pages/EditProduct";
import BestSellers from "./pages/BestSellers";
import LargestInventory from "./pages/LargestInventory";


export default function Routess() {
  return (
      <Routes>
        <Route path="/" element={<Produts />} />
        <Route path="new-product" element={<NewProduct />} />
        <Route path="edit-product/:id" element={<EditProduct />} />
        <Route path="best-product/" element={<BestSellers />} />
        <Route path="invetory-product/" element={<LargestInventory />} />
      </Routes>
  );
}