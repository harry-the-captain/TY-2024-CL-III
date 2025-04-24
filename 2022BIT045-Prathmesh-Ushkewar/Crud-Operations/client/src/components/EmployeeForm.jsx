import { useState, useEffect } from "react";
import axios from "axios";

function EmployeeForm({ employee, setEditingEmployee }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    department: "",
    salary: "",
  });

  // When editing an existing employee, populate the form with current data
  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name,
        email: employee.email,
        position: employee.position,
        department: employee.department,
        salary: employee.salary,
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (employee) {
      // Update existing employee
      await axios.put(`http://localhost:5000/api/employees/${employee._id}`, formData);
      setEditingEmployee(null);  // Close form after update
    } else {
      // Add new employee
      await axios.post("http://localhost:5000/api/employees", formData);
    }

    window.location.reload(); // Refresh after adding/updating
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label>Position:</label>
      <input
        type="text"
        name="position"
        value={formData.position}
        onChange={handleChange}
        required
      />
      <label>Department:</label>
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
        required
      />
      <label>Salary:</label>
      <input
        type="number"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        required
      />
      <button type="submit">{employee ? "Update" : "Add"} Employee</button>
    </form>
  );
}

export default EmployeeForm;

