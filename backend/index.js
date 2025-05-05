import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
dotenv.config({});

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
// routes
app.use("/api/v1/user", userRoute)

app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}`);
});
