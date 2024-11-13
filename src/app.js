const express = require("express");
const app = express();

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Atharva", lastName: "Shelke" });
});

app.listen(3000, () => {
  console.log("Sever is running on port 3000");
});
