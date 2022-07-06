const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
////////// Register //////////
router.post("/register", async (req, res) => {
  try {
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .save()
      .then(() => {
        return res.status(200).json("User saved Successfully");
      })
      .catch((error) => {
        return res.status(400).json({ message: error.message });
      });
  } catch (error) {
    console.log({ message: error.message });
  }
});
////////// Login //////////
router.post("/login", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const passedPassword = req.body.password;
  try {
    const user = await User.findOne({ username, email });
    if (user && user.password === passedPassword) {
      const { password, ...othres } = user._doc;
      const accessToken = jwt.sign(
        {
          id: user.id,
          isAdmin: user.isAdmin,
        },
        process.env.TOKEN_SECRET,
        { expiresIn: "3d" }
      );
      console.log(process.env.TOKEN_SECRET);
      req.token = accessToken;
      return res.status(200).json({ ...othres, accessToken });
    }
    return res.status(400).json({ message: "user was not found" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
