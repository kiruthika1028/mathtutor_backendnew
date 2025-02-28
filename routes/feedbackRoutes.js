const express = require("express");
const { submitFeedback, getAllFeedback } = require("../controllers/feedbackController");

const router = express.Router();

router.post("/submit", submitFeedback);  // ✅ Ensure this is correct
router.get("/all", getAllFeedback);

module.exports = router;
