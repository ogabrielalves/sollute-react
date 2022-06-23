import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';

import Product from './Pages/Dashboard/Product/Product';
import NewProduct from './Pages/Dashboard/Product/NewProduct';
import EditProduct from './Pages/Dashboard/Product/EditProduct';
import HomeDashboard from './Pages/Dashboard/Home/Home';
import NotFound from "./Pages/NotFound/NotFound";
import Employees from './Pages/Dashboard/Employees/Employees';
import NewEmployee from "./Pages/Dashboard/Employees/NewEmployee";
import EditEmployee from "./Pages/Dashboard/Employees/EditEmployee";
import Provider from "./Pages/Dashboard/Provider/Provider";
import NewProvider from "./Pages/Dashboard/Provider/NewProvider";
import EditProvider from "./Pages/Dashboard/Provider/EditProvider";
import Client from "./Pages/Dashboard/Client/Client";
import NewClient from "./Pages/Dashboard/Client/NewClient";
import EditClient from "./Pages/Dashboard/Client/EditClient";
import SalesReport from "./Pages/Dashboard/SalesReport/SalesReport";
import Configuration from "./Pages/Dashboard/Configuration/Configuration";
import Casher from "./Pages/Dashboard/Casher/Casher";
import EditCasher from './Pages/Dashboard/Casher/EditCasher';

function Rotas() {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/dashboard" element={<HomeDashboard />} />
                <Route exact path="/dashboard/configuration" element={<Configuration />} />
                <Route element={<NotFound />} />

                <Route exact path="/dashboard/product" element={<Product />} />
                <Route exact path="/dashboard/new-product" element={<NewProduct />} />
                <Route exact path="/dashboard/edit-product/:productId" element={<EditProduct />} />

                <Route exact path="/dashboard/employees" element={<Employees />} />
                <Route exact path="/dashboard/new-employee" element={<NewEmployee />} />
                <Route exact path="/dashboard/edit-employee/:emplyoeeId" element={<EditEmployee />} />

                <Route exact path="/dashboard/client" element={<Client />} />
                <Route exact path="/dashboard/new-client" element={<NewClient />} />
                <Route exact path="/dashboard/edit-client/:clientId" element={<EditClient />} />

                <Route exact path="/dashboard/provider" element={<Provider />} />
                <Route exact path="/dashboard/new-provider" element={<NewProvider />} />
                <Route exact path="/dashboard/edit-provider/:providerId" element={<EditProvider />} />

                <Route exact path="/dashboard/casher" element={<Casher />} />
                <Route exact path="/dashboard/edit-casher/:codigo" element={<EditCasher />} />

                <Route exact path="/dashboard/sales-report" element={<SalesReport />} />
            </Routes>
        </Router>
    );
    
}

export default Rotas;