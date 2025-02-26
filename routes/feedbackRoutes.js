const express = require("express");
const { submitFeedback, getAllFeedback } = require("../controllers/feedbackController");

const router = express.Router();

// Route for submitting feedback
router.post("/submit", submitFeedback);

// Route for getting all feedback
router.get("/all", getAllFeedback);

module.exports = router;
