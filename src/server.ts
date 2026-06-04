import express from "express";
import config from "./config";

const app = express();
const port = config.port;
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
