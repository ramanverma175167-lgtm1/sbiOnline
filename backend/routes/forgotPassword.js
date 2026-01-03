const express = require("express");
const router = express.Router();
const ForgotPassword = require("../models/ForgotPassword");

// POST /api/users/forgot-password
router.post("/", async (req, res) => {
  try {
    const { customerId } = req.body;

    if (!customerId) {
      return res.status(400).json({ error: "Customer ID is required" });
    }

    const record = new ForgotPassword({ customerId });
    await record.save();

    res.status(201).json({ message: "Forgot Password request submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
