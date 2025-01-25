import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();
const port = process.env.PORT;

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log("server running on Port:" + port);
});
