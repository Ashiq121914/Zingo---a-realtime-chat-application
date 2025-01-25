import express from "express";

const route = express.Router();

route.get("/signup", (req, res) => {
  res.send("sign up route");
});
route.get("/login", (req, res) => {
  res.send("login  route");
});
route.get("/logout", (req, res) => {
  res.send("logout route");
});

export default route;
