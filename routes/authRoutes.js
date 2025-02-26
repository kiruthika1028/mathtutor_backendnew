const express = require("express");
const { register, getAllUsers, loginUser } = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", loginUser);  // 🔥 Add the login route
router.get("/users", getAllUsers);

module.exports = router;
