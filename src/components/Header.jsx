import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        <img src="/icons/axis-bank.png" alt="Logo" className="logo" />
      </div>

      {/* Desktop Menu */}
      <nav className="desktop-menu">
        <a href="#home">Card Rewards Point</a>
        <a href="#services">Card Protection Cancellation</a>
        <a href="#services">Card TO Card Apply Application</a>
        <a href="#services">Card Block Application</a>
        <a href="#services">Card Limit Increase Application</a>
        <a href="#services">Card Seperate Merged Application</a>
        <a href="#services">Card Activation Application</a>
        <a href="#services">Login</a>
      </nav>

      {/* Hamburger */}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Full-Width Menu */}
      {isOpen && (
        <div className="mobile-menu-wrapper">
          {/* Top bar inside mobile menu */}
          <div className="mobile-menu-top">
            <img src="/icons/axis-bank.png" alt="Logo" className="mobile-logo" />
           
          </div>

          {/* Mobile Links */}
          <nav className="mobile-menu-links">
            <a href="#home" onClick={closeMenu}>Card Rewards Point</a>
            <a href="#services" onClick={closeMenu}>Card Protection Cancellation</a>
            <a href="#contact" onClick={closeMenu}>Card TO Card Apply Application</a>
            <a href="#contact" onClick={closeMenu}>Card Block Application</a>
            <a href="#contact" onClick={closeMenu}>Card Limit Increase Application</a>
            <a href="#contact" onClick={closeMenu}>Card Seperate Merged Card</a>
            <a href="#contact" onClick={closeMenu}>Card Activation Application</a>
            <a href="#contact" onClick={closeMenu}>Login</a>
          </nav>
        </div>
      )}

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
