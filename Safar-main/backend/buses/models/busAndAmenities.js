const mongoose = require("mongoose");

const busAndAmenitiesSchema = new mongoose.Schema({
  baseFare: { type: Number, required: true },
});

module.exports = mongoose.model("busAndAmenities", busAndAmenitiesSchema);
