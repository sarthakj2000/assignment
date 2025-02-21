const express = require("express");
const {
  signup,
  login,
  verifyEmail,
  verifyUser,
} = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify/:token", verifyEmail);
router.post("/verify-token", verifyUser);

module.exports = router;
