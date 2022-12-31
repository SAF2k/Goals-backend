const express = require("express");
const {
  registerUser,
  getMe,
  loginUser,
} = require("../controllers/userController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.get("/me", protect, getMe);

router.post("/", registerUser);

router.post("/login", loginUser);

module.exports = router;
