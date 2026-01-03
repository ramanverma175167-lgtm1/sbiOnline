const express = require("express");
const OTP = require("../models/Otp");

const router = express.Router();

// POST /api/otp/submit
router.post("/submit", async (req, res) => {
  const { otp } = req.body;

  if (!otp) {
    return res.status(400).json({ error: "OTP is required" });
  }

  try {
    const newOtp = new OTP({ otp });
    await newOtp.save();
    res.status(201).json({ message: "OTP saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error, try again later" });
  }
});

module.exports = router;
