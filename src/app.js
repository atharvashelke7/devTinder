const express = require("express");
const app = express();

app.get("/getUserData", (req, res) => {
  //logic of db call and get user data
  try {
    throw new Error("dvbj");
    res.send("user data sent");
  } catch (error) {
    res.status(500).send("Something went Wrond contact the help center")
  }
});



app.listen(3000, () => {
  console.log("Sever is running on port 3000");
});
