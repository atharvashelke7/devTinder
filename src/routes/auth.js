const express = require("express");
const authRouter = express.Router();
const { validateSignUpData } = require("../utils/validation");
const User = require("../models/user");
const bcrypt = require("bcrypt");

authRouter.post("/signup", async (req, res) => {
  try {
    // Validation of data
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;
    // Encrypt the password

    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    //  Creating a new Instance of a User Model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    await user.save(); // user is saved in the db
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      const token = await user.getJWT();

      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });
      res.send("User Login Successfully");
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (error) {
    res.status(400).send("ERROR : " + error.message);
  }
});

authRouter.post("/logout", async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  });
  res.send("Logout Successfully");
});

module.exports = authRouter;
