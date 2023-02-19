const express = require("express");
const User = require("../Modules/Schema");

const router = express.Router();

require("../db/connect");

router.get("/", (req, res) => {
  res.send("Hello from Server");
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  // console.log(name);

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "User already exist" });
    }

    const user = new User({ name, email, password });
    const userRegister = await user.save();

    if (userRegister) {
      res.status(200).json({ message: "User successfully Registered" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill the data" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      res.status(200).json({ message: "Log In Successful" });
    } else {
      res.status(422).json({ error: "Invalid email " });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
