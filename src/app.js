const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/authMiddleware");

app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
  res.send("All user data");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Delete All the Data");
});

app.listen(3000, () => {
  console.log("Sever is running on port 3000");
});
