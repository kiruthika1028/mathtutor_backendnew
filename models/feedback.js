const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    email: { type: String, required: true }, // Store email instead of userId
    username: { type: String },  // Optional: If you want to store username too
    message: { type: String, required: true }
});

module.exports = mongoose.model("Feedback", feedbackSchema);
