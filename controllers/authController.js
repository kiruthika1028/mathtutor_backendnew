const User = require("../models/User");

// ✅ Register a new user
const register = async (req, res) => {
    try {
        const { name, email, username, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email, and password are required!" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        const newUser = new User({ name, email, username, password });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully!", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
};

// ✅ Login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required!" });
        }

        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials!" });
        }

        res.status(200).json({ message: "Login successful!", user });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error });
    }
};

// ✅ Get all users (for debugging/admin)
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};

module.exports = { register, loginUser, getAllUsers };
