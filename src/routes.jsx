import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';
import Plans from './Pages/Plans/Plans';

import Product from './Pages/Dashboard/Product/Product';
import NewProduct from './Pages/Dashboard/Product/NewProduct';
import EditProduct from './Pages/Dashboard/Product/EditProduct';
import HomeDashboard from './Pages/Dashboard/Home/Home';
import DeleteProduct from "./Pages/Dashboard/Product/DeleteProduct";
import NotFound from "./Pages/NotFound/NotFound";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/plans" element={<Plans />} />
        <Route  element={<NotFound />} />

        <Route exact path="/dashboard/product" element={<Product />} />
        <Route exact path="/dashboard/new-product" element={<NewProduct />} />
        <Route exact path="/dashboard/edit-product" element={<EditProduct />} />
        <Route exact path="/dashboard/delete-product" element={<DeleteProduct />} />
        <Route exact path="/dashboard" element={<HomeDashboard />} />
      </Routes>
    </Router>
  );
}

export default Rotas;