const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://test:test@cluster0.olivezz.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
