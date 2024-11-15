const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  // Creating a new Instance of a User Model
  const user = new User({
    firstName: "Sachin",
    lastName: "Tendulkar",
    emailId: "Sachin@gmail.com",
    password: "Sachin@123",
  });

  try {
    await user.save(); // user is saved in the db
    res.send("User added successfully");
  } catch (error) {
    res.status(400).send("Error While Saving the user", +error.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database Connection Establish");
    app.listen(3000, () => {
      console.log("Server is connected successfully on port 3000");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });
