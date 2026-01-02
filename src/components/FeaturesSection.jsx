import React from "react";
import "./FeaturesSection.css";

const features = [
  { 
    title: "Card Protection", 
    icon: "/icons/credit-card.png",
    description: "Keep your card safe from unauthorized usage and fraud.",
    buttons: ["Activate", "Deactivate"] // Two buttons
  },
  { 
    title: "Limit Increase", 
    icon: "/icons/increase.png",
    description: "Easily request an increase in your card spending limit.",
    buttons: ["Request Limit"] // One button
  },
  { 
    title: "Redeem Points", 
    icon: "/icons/redeem.png",
    description: "Apply for transferring funds between your cards seamlessly.",
    buttons: ["Redeem Now"] // One button
  },
  { 
    title: "Card Block Or Unblock", 
    icon: "/icons/no-credit-card.png",
    description: "Block your card immediately in case it’s lost or stolen.",
    buttons: ["Block / Unblock Card"] // One button
  },
  { 
    title: "Card Activation", 
    icon: "/icons/card.png",
    description: "Activate your new card quickly to start using it.",
    buttons: ["Activate Card"] // One button
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.icon} alt={feature.title} className="feature-icon" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <div className="feature-buttons">
              {feature.buttons.map((btnText, btnIndex) => (
                <button key={btnIndex} className="feature-btn">{btnText}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
