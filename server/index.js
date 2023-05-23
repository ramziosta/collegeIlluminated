// server page with .env file import an express app and a server at PORT 4534
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello From college Illuminated!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} for college Illuminated!`);
});
