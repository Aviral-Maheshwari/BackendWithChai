import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  // filepath: d:\BackendProject-Chai\src\index.js
  .catch((err) => {
    console.log("MongoDB Connection Falied !!", err);
  });

/*
import express from "express";
const app = express();
mongoose.connect();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("eror", () => {
      console.log("ERROR", error);
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port{process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
})();
*/
