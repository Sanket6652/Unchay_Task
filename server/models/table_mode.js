const mongoose = require("mongoose");

const disabilityDataSchema = new mongoose.Schema({
  category: String,
  participants: Number,
  ballotsCompleted: Number,
  ballotsIncomplete: Number,
  accuracy: String,
  timeToComplete: String,
});

const DisabilityData = mongoose.model("DisabilityData", disabilityDataSchema);

module.exports = DisabilityData;
