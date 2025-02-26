const Feedback = require("../models/feedback");
const mongoose = require("mongoose");

// Submit Feedback
exports.submitFeedback = async (req, res) => {
    try {
        const { userId, message } = req.body;

        // Validate userId format
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid userId format" });
        }

        const feedback = new Feedback({ user: userId, message });
        await feedback.save();

        res.status(201).json({ message: "Feedback submitted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get All Feedback
exports.getAllFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.find().populate("user", "name email");
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
