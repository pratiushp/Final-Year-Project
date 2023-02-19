const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "./Config.env" });

const PORT = process.env.PORT;

app.use(express.json()); //chaning json

app.use(require("./Router/Auth"));

app.listen(PORT, () => {
  console.log(`Listening the PORT at ${PORT}`);
});
