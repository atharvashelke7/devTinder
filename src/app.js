const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json()); // convert json into js Object
app.use(cookieParser()); // To read the cookie need the cookie parser

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/requests");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);

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
