import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    department: "",
    salary: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch all employees
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/employees"); // Change URL accordingly
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle updating an employee
  const handleUpdateEmployee = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/employees/${editingId}`, formData);
      setEditMode(false);
      fetchEmployees(); // Refresh the employee list after update
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  // Handle setting the form to edit an employee
  const handleEditClick = (employee) => {
    setEditingId(employee._id);
    setFormData({
      name: employee.name,
      email: employee.email,
      position: employee.position,
      department: employee.department,
      salary: employee.salary,
    });
    setEditMode(true);
  };

  return (
    <div>
      <h1>Employee Management System</h1>
      
      {/* Show employee list */}
      <div>
        <h2>Employee List</h2>
        <ul>
          {employees.map((employee) => (
            <li key={employee._id}>
              {employee.name} - {employee.position}{" "}
              <button onClick={() => handleEditClick(employee)}>Update</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Update form */}
      {editMode && (
        <div>
          <h2>Update Employee</h2>
          <form onSubmit={handleUpdateEmployee}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              placeholder="Position"
            />
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              placeholder="Department"
            />
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              placeholder="Salary"
            />
            <button type="submit">Update Employee</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;

