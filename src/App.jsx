import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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



function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <SliderSection />
              <FeaturesSection />
            </>
          }
        />

        {/* Pages */}
        <Route path="/activate-card" element={<ActivateCard />} />
        <Route path="/login-card" element={<Login />} />
        <Route path="/ForgetCustomerId" element={<ForgetCustomerId />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/otp-submit" element={<OTPSubmit />} />
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
