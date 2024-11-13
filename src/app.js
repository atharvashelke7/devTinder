const express = require("express");
const app = express();

app.use("/user", [
  (req, res, next) => {
    console.log("Handling the 1st route user");
    next();
  },
  (req, res, next) => {
    console.log("Handling the 2nd route user");
    next();
  },
  (req, res, next) => {
    console.log("Handling the 3rd route user");
    next();
  },
  (req, res) => {
    console.log("Handling the 4th route user");
    res.send("4th Response");
  },
]);

app.listen(3000, () => {
  console.log("Sever is running on port 3000");
});
