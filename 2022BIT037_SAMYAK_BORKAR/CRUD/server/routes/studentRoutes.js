const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
});

// Read All
router.get('/', async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

// Update
router.put('/:id', async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
});

// Delete
router.delete('/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student Deleted' });
});

module.exports = router;