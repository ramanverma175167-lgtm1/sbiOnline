const mongoose = require("mongoose");

const forgotPasswordSchema = new mongoose.Schema({
  customerId: String, // Not unique
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ForgotPassword", forgotPasswordSchema);
