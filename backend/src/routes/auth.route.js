import express from "express";
import { signup,login,logout } from "../controllers/auth.controller.js";

const route = express.Router();

route.get("/signup", signup);
route.get("/login", login);
route.get("/logout", logout);

export default route;
