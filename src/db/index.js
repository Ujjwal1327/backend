
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n connection established DB_HOST : ${connectionInstance.connection.host} `
    );
    // console.log(connectionInstance);
  } catch (err) {
    console.log("DB connection failed", err);
    process.exit(1);
  }
};

export default connectDB;
