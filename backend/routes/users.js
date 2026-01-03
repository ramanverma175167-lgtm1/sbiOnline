const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Save customer ID & password
router.post("/register", async (req, res) => {
  try {
    const { customerId, password } = req.body;

    if (!customerId || !password) {
      return res.status(400).json({ error: "Customer ID and Password required" });
    }

    const user = new User({
      customerId,
      password,
    });

    await user.save();

    res.status(201).json({ message: "User saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Technical error, please try later" });
  }
});

module.exports = router;
