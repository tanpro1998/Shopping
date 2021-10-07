const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });
  try {
    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// Login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) return res.status(401).json("user not found");

    const validPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    ).toString(CryptoJS.enc.Utf8);
    if (validPassword !== req.body.password)
      return res.status(401).json("wrong password");

    const accessToken = jwt.sign(
      {
        id: user._id,
        idAdmin: user._isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    return res.status(200).json({ ...others, accessToken });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
