import express from "express";
import config from "./config";
import app from "./app";

const port = config.port;

const main = () => {
  app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
  });
};

main();
