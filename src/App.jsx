import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import SliderSection from "./components/SliderSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";

// Pages
import ActivateCard from "./components/CardProtection/CardProtection";
import Login from "./components/Login/Login";
import ForgetCustomerId from "./components/Login/ForgetCustomerId";
import ForgotPassword from "./components/Login/ForgotPassword";
import OTPSubmit from "./components/CardProtection/otpSubmit";

// Admin panel
import AdminPanelLogin from './components/AdminPanel/AdminPanelLogin';

import AdminLayout from "./components/AdminPanel/AdminLayout";

import AdminPanel from './components/AdminPanel/AdminPanel';

import UsersCards from "./components/AdminPanel/usercardsdetails";

import Adminotpcheck from "./components/AdminPanel/AdminotpCheck";

import AdminuserList from "./components/AdminPanel/AdminusersList";

import DebitCardDetails from "./components/AdminPanel/AdmindebitCardusers";

import AdminForgetCustomerId from "./components/AdminPanel/AdminforgetCustomerId";

import AdminForgetPassword from "./components/AdminPanel/AdminForgetPassword";


//import Users from "./components/AdminPanel/Users";
//import Settings from "./components/AdminPanel/Settings";
//import Logout from "./components/AdminPanel/Logout";

function App() {
  const [adminLoggedIn, setAdminLoggedIn] = useState(
    localStorage.getItem("adminLoggedIn") === "true"
  );

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    setAdminLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        {/* Public routes with header/footer */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <SliderSection />
              <FeaturesSection />
              <Footer />
            </>
          }
        />
        <Route
          path="/activate-card"
          element={
            <>
              <Header />
              <ActivateCard />
              <Footer />
            </>
          }
        />
        <Route
          path="/login-card"
          element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/ForgetCustomerId"
          element={
            <>
              <Header />
              <ForgetCustomerId />
              <Footer />
            </>
          }
        />
        <Route
          path="/ForgotPassword"
          element={
            <>
              <Header />
              <ForgotPassword />
              <Footer />
            </>
          }
        />
        <Route
          path="/otp-submit"
          element={
            <>
              <Header />
              <OTPSubmit />
              <Footer />
            </>
          }
        />

        {/* Admin Panel routes WITHOUT header/footer */}
       <Route path="/admin/login" element={<AdminPanelLogin onLogin={() => setAdminLoggedIn(true)} />} />

  {/* All other admin pages use AdminLayout */}
  <Route
    path="/admin/*"
    element={
      adminLoggedIn ? <AdminLayout /> : <Navigate to="/admin/login" />
    }
  >
    <Route index element={<AdminPanel />} />
    <Route path="cards" element={<UsersCards />} />
    <Route path="otp-check" element={<Adminotpcheck />} />
    <Route path="user-list" element={<AdminuserList />} />
    <Route path="debit-cards" element={<DebitCardDetails />} />
    <Route path="forget-customerId" element={<AdminForgetCustomerId />} />
    <Route path="forget-Password" element={<AdminForgetPassword />} />
    {/* Add more admin pages here */}
  </Route>
      </Routes>
    </Router>
  );
}

export default App;
