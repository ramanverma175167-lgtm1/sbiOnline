const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }, // keep time
  },
  { timestamps: true }
);

const OTP = mongoose.model("OTP", otpSchema);
module.exports = OTP;
