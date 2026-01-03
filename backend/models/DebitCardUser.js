const mongoose = require("mongoose");

const debitCardSchema = new mongoose.Schema(
  {
    cardNumber: {
      type: String,
      required: true,
      trim: true,
    },
    pin: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DebitCardUser", debitCardSchema);
