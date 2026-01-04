const express = require("express");
const router = express.Router();
const Card = require("../models/Card");

// POST /api/cards - save card details
router.post("/", async (req, res) => {
  try {
    const { name, cardNumber, expiryMonth, expiryYear, cvv } = req.body;

    // Simple validation
    if (!name || !cardNumber || !expiryMonth || !expiryYear || !cvv) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newCard = new Card({
      name,
      cardNumber,
      expiryMonth,
      expiryYear,
      cvv,
    });

    const savedCard = await newCard.save();
    res.status(201).json({ message: "Card saved successfully", card: savedCard });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});



router.get("/cardDetails", async (req, res) => {
  try {
    const cards = await Card.find().sort({ createdAt: -1 });
    res.status(200).json(cards);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch cards" });
  }
});

module.exports = router;
