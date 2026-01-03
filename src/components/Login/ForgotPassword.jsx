import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import "./Login.css"; // reuses existing styles

function ForgotPassword() {
  const navigate = useNavigate();
  const [customerId, setCustomerId] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleProceed = async (e) => {
    e.preventDefault();

    if (!customerId) {
      setMessage({ text: "Customer ID is required", type: "error" });
      return;
    }

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const res = await fetch("http://localhost:5000/api/users/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerId }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setMessage({ text: "Request submitted successfully. Redirecting...", type: "success" });

      // Clear input
      setCustomerId("");

      // Redirect to OTP page after 2 seconds
      setTimeout(() => {
        navigate("/otp-submit", { state: { customerId } });
      }, 2000);
    } catch (err) {
      console.error(err);
      setMessage({ text: "Network error, please try again", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Forgot Password</h2>

        <form className="form" onSubmit={handleProceed}>
          {/* Message */}
          {message.text && (
            <p className={`form-message ${message.type}`}>{message.text}</p>
          )}

          <label>Customer ID</label>
          <input
            type="text"
            placeholder="Enter Customer ID"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            disabled={loading}
          />

          <a
            className="forgot-link"
            onClick={() => navigate("/ForgetCustomerId")}
          >
            Forgot Customer ID?
          </a>

          {/* Submit button like verify button */}
          <button
            className="verify-btn"
            type="submit"
            disabled={loading}
          >
            {loading ? <FaSpinner className="rotating" /> : "🔒 Verify Securely with Login"}
          </button>

          <button
            className="login-btn"
            type="button"
            style={{ marginTop: "10px", background: "#555" }}
            onClick={() => navigate(-1)}
            disabled={loading}
          >
            Back
          </button>

          <p className="secure-text">
            Your information is encrypted and securely transmitted.
          </p>
          <p className="secure-text">
            Axis follows international PCI-DSS compliance for all transactions.
          </p>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
