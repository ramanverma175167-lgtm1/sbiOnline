import { useState, useRef, useEffect } from "react";
import "./AdminPanel.css";
import { Link, useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const navigate = useNavigate();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        {/* Logo */}
        <div className="admin-logo">AXIS Admin</div>

        {/* Navigation */}
        <nav
          ref={navRef}
          className={`admin-nav ${menuOpen ? "open" : ""}`}
        >
          <Link to="/admin" onClick={() => setMenuOpen(false)}>
            Dashboard
          </Link>
          <Link to="/admin/cards" onClick={() => setMenuOpen(false)}>
            Users Cards
          </Link>
          <Link to="/admin/user-list" onClick={() => setMenuOpen(false)}>
            Users
          </Link>
          <Link to="/admin/debit-cards" onClick={() => setMenuOpen(false)}>
            Debit Card
          </Link>
          <Link to="/admin/forget-customerId" onClick={() => setMenuOpen(false)}>
            Forget CustomerId
          </Link>
          <Link to="/admin/forget-password" onClick={() => setMenuOpen(false)}>
            Forget Password
          </Link>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div
          ref={toggleRef}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </header>
    </div>
  );
}
