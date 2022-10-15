const mongoose = require("mongoose");

const locationInfoSchema = new mongoose.Schema({
  startingCityName: { type: String, required: true },
  destinationCityName: { type: String, required: true },
  distanceBetweenCities: { type: Number, required: true },
  travelTimeInSeconds: { type: Number },
  baseFare: { type: String, required: true },
  totalFare: { type: Number, required: true },
  enc_bus_id:{type:String,required:true,unique:true},
  busAndAmenitiesProvider: [
    {
      busAndAmenties: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "busAndAmenities",
      },
    },
  ],
});

module.exports = mongoose.model("locationInfoModel", locationInfoSchema);
