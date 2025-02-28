const Feedback = require("../models/feedback");

// Submit Feedback (Updated)
exports.submitFeedback = async (req, res) => {
    try {
        const { email, username, message } = req.body;

        if (!email && !username) {
            return res.status(400).json({ message: "Email or username is required" });
        }

        const feedback = new Feedback({ email, username, message });
        await feedback.save();

        res.status(201).json({ message: "Feedback submitted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get All Feedback (No Changes)
exports.getAllFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
