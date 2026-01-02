import React from "react";
import Header from "./components/Header";
import SliderSection from "./components/SliderSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer"; // Import footer


function App() {
  return (
    <div style={{ fontFamily: "Roboto, sans-serif" }}>
      {/* Only Header */}
      <Header />
      <SliderSection />
      <FeaturesSection />
      <Footer /> 
    </div>
  );
}

export default App;
