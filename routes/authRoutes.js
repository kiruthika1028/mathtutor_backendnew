const express = require("express");
const { register, getAllUsers, loginUser } = require("../controllers/authController");

const router = express.Router();

// ✅ Register a new user
router.post("/register", async (req, res) => {
    try {
        await register(req, res);
    } catch (error) {
        res.status(500).json({ message: "Server error during registration", error });
    }
});

// ✅ Login user
router.post("/login", async (req, res) => {
    try {
        await loginUser(req, res);
    } catch (error) {
        res.status(500).json({ message: "Server error during login", error });
    }
});

// ✅ Get all users (Admin or debugging purpose)
router.get("/users", async (req, res) => {
    try {
        await getAllUsers(req, res);
    } catch (error) {
        res.status(500).json({ message: "Server error while fetching users", error });
    }
});

module.exports = router;
