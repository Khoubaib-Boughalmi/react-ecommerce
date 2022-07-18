const User = require("../models/User");
const router = require("express").Router();
const {
  verifyToken,
  verifyIsAdmin,
  verifyTokenAndAuthorization,
} = require("../middlewares/verifyToken");
// get status
router.get("/status", async (req, res) => {
  res.send("hello");
});

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      res.status(200).json(updatedUser)
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get single user
router.get("/:id", verifyIsAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//get all user
router.get("/", verifyIsAdmin, async (req, res) => {
  const query = req.query.new;

  try {
    const users = query
      ? await User.find().sort({ id: -1 }).limit(1)
      : await User.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
