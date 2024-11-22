const express = require("express");
const requestRouter = express.Router();
const { userAuth } = require("../middlewares/authMiddleware");

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;

  console.log("Sending connection request");
  res.send(user.firstName + " Connection request sent");
});

module.exports = requestRouter;
