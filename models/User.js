const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        username: { type: String, required: true, unique: true, sparse: true }, // Sparse allows null values
        password: { type: String, required: true }
    },
    { timestamps: true }
);

// Fix the duplicate key issue
userSchema.index({ username: 1 }, { unique: true, sparse: true });

const User = mongoose.model("User", userSchema);
module.exports = User;
