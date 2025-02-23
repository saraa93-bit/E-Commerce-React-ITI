import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./Layouts/UserLayout";
import AdminLayout from "./Layouts/AdminLayout";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Email from "./Pages/Email";
import Calendar from "./Pages/Calendar";
import Cards from "./Components/Cards";
import Charts from "./Components/Charts";
import ManageUsersTable from "./Components/ManageUsersTable";
import ManageProductsTable from "./Components/ManageProductsTable";
import ManageOrdersTable from "./Components/ManageOrders";
import ProductPage from "./Pages/ProductPage";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Style.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>

      <Routes>
        <Route element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home addToCart={addToCart} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} updateCart={setCartItems} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} clearCart={clearCart} />} />
          <Route path="/ProductPage" element={<ProductPage addToCart={addToCart} />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/email" element={<Email />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/ManageUsers" element={<ManageUsersTable />} />
          <Route path="/ManageProductsTable" element={<ManageProductsTable />} />
          <Route path="/ManageOrders" element={<ManageOrdersTable />} />
        </Route>

        <Route path="*" element={<div className="text-center mt-5">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
