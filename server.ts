import express from "express";
import payload from "payload";

require("dotenv").config();
const app = express();

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
  });

  app.listen(5000, async () => {
    console.log(
      "Express is now listening for incoming connections on port 5000."
    );
  });
};

start();
