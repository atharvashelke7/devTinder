const express = require("express");
const app = express();

//This will only handle GET calls
app.get("/user", (req, res) => {
  res.send({ firstName: "Atharva", lastName: "Shelke" });
});

app.post("/user", (req, res) => {
  console.log("Saved Data to the Database");
  res.send("Data successfully Saved to Database");
});

app.delete("/user", (req, res) => {
  res.send("Deleted Successfully");
});

app.use("/test", (req, res) => {
  // this will match all the http method api calls to test
  res.send("test");
});

app.listen(3000, () => {
  console.log("Sever is running on port 3000");
});
