import express from "express";
import config from "./config";
import app from "./app";
import { initDB } from "./db";

const port = config.port;

const main = () => {
  initDB();
  app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
  });
};

main();
