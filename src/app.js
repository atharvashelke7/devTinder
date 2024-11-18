const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json()); // convert json into js Object

app.post("/signup", async (req, res) => {
  //  Creating a new Instance of a User Model
  const user = new User(req.body);

  try {
    await user.save(); // user is saved in the db
    res.send("User added successfully");
  } catch (error) {
    res.status(400).send("Error While Saving the user", +error.message);
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.findOne({ emailId: userEmail });
    if (!user) {
      res.status(404).send("user not found");
    } else {
      res.send(user);
    }

    // const users = await User.find({ emailId: userEmail });
    // if (users.length === 0) {
    //   res.status(404).send("user not found");
    // } else {
    //   res.send(users);
    // }
  } catch (error) {
    res.status(400).send("something went wrong");
  }
});

// Get all the users from the db
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send("something went wrong");
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("user deleted successfully");
  } catch (error) {
    res.status(400).send("something went wrong");
  }
});

app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    console.log(user);
    res.send("user update successfully");
  } catch (error) {
    res.status(400).send("UPDATE FAILED" + error.message);
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
