import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { store } from './store'; // Import the Redux store
import PrivateRoute from "./Components/Auth/PrivateRoute";

import Home from "./Components/Home/Home";
import LoginForm from "./Components/Auth/login/Login";
import User from "./Components/Dashboard/User";
import Pickup from "./Components/Dashboard/Pickup";
import Footer from "./Components/Commonfile/Footer";
import Partner from "./Components/Partner/Partner";
import ShopOwner from "./Components/Dashboard/ShopOwner";
import ProfileSlider from "./Components/Auth/contacts/contact";
import LaundriesPage from "./Components/Shops/shoplist";
import AboutUs from "./Components/Home/AboutUs";
import SignUp1 from "./Components/Auth/signup/SignUp1";
import Orders from "./Components/Shops/orders";
import Admin from "./Components/Dashboard/Admin";
import NavBar1 from "./Components/Commonfile/NavBar1";


import '@fontsource/poppins';
import CustomerProfile from "./Components/Dashboard/CustomerDashboard/CustomerProfile";

function App() {
  // Hiding navbar at login, signup
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup", "/users", "/pickup", "/ShopOwner", "/shopOwner", "/admin"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <NavBar1 />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp1 />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<ProfileSlider />} />
        <Route path="/shoplist" element={<LaundriesPage />} />
        <Route path="/orders" element={<Orders />} />
        
        {/* Protected Routes */}
        <Route path="/users" element={<PrivateRoute element={<User />} />} />
        <Route path="/users/:userId" element={<CustomerProfile />} />
        <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
        <Route path="/pickup" element={<PrivateRoute element={<Pickup />} />} />
        <Route path="/ShopOwner" element={<PrivateRoute element={<ShopOwner />} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function Root() {
  return (
    <Provider store={store}> {/* Wrap the entire app with Redux Provider */}
      <Router>
        <App />
      </Router>
    </Provider>
  );
}