const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // ✅ Important for parsing JSON
app.use(cors());

// Import Routes
const authRoutes = require("./routes/authRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

// Use Routes
app.use("/auth", authRoutes);
app.use("/feedback", feedbackRoutes); // ✅ This ensures feedback routes work

const PORT = process.env.PORT || 5000;

// ✅ Fix MongoDB Connection Warnings
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ Connected to MongoDB");
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch(error => {
        console.error("❌ MongoDB Connection Error:", error);
    });
