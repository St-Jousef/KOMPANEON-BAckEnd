import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import "dotenv/config.js";

import userRouter from "./routes/userRoute.js";
import taskRouter from "./routes/taskRoute.js";
import forgotPasswordRouter from "./routes/forgotPassword.js";

//app config
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
mongoose.set("strictQuery", true);

//middlewares
app.use(express.json());
app.use(cors());

//db config
mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DB Connected");
    }
  }
);

//api endpoints
app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);
app.use("/api/forgotPassword", forgotPasswordRouter);

//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
