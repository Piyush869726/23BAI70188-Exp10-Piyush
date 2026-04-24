const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection (UPDATED - no deprecated options)
mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
    .then(() => console.log("✅ Database Connected"))
    .catch((err) => {
        console.error("❌ DB Connection Error:", err);
        process.exit(1);
    });

// Routes
const studentRoutes = require("./routes/studentRoutes");
app.use("/api/students", studentRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Server Start
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});