const { mongo_uri } = require("./configs");
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((e) => console.log("Mongo connected"))
    .catch((err) => console.log(err));
};

module.exports = { connectDB };
