import 'dotenv/config';
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants.js";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("express not able to talk with db", (err) => {
      console.log("ERROR", err);
      throw err;
    });
    app.listen(process.env.PORT, () => {
      console.log("app is listening on", process.env.PORT);
    });
  } catch (err) {
    console.log("DB connection Failed", err);
  }
})();
