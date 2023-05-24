const asyncHandler = require("express-async-handler");
const User = require("../modals/userModal");
const generateToken = require("../utils/generateToken");

//@desc user register(authorization)
//@route GET /api/users/login
//@access public
const login = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401);
    throw new Error("Please provide email and password!");
  }
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

//@desc user register(authorization)
//@route GET /api/users
//@access public
const signUp = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Email id already exists");
  }
  const user = await User.create({ name, email, password });
  console.log(user);
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
module.exports = { login, signUp };
