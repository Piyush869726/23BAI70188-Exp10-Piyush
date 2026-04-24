const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// CREATE
router.post("/", async(req, res) => {
    try {
        const data = await Student.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ ALL
router.get("/", async(req, res) => {
    try {
        const data = await Student.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ SINGLE
router.get("/:id", async(req, res) => {
    try {
        const data = await Student.findById(req.params.id);

        if (!data) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE
router.put("/:id", async(req, res) => {
    try {
        const data = await Student.findByIdAndUpdate(
            req.params.id,
            req.body, { new: true }
        );

        if (!data) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE
router.delete("/:id", async(req, res) => {
    try {
        const data = await Student.findByIdAndDelete(req.params.id);

        if (!data) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json({ message: "✅ Record Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;