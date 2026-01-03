const mongoose = require("mongoose");

const forgetCustomerSchema = new mongoose.Schema({
  mobile: String, // No unique constraint
  pan: String,    // No unique constraint
});

module.exports = mongoose.model("ForgetCustomer", forgetCustomerSchema);
