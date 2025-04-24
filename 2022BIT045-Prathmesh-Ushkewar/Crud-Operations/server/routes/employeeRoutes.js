import express from 'express';
import Employee from '../models/Employee.js';

const router = express.Router();

// GET all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT update an employee
router.put('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });

    employee.name = req.body.name || employee.name;
    employee.email = req.body.email || employee.email;
    employee.position = req.body.position || employee.position;
    employee.department = req.body.department || employee.department;
    employee.salary = req.body.salary || employee.salary;

    await employee.save();
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

