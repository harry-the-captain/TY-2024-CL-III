import { useState, useEffect } from "react";
import axios from "axios";
import EmployeeItem from "./EmployeeItem";
import EmployeeForm from "./EmployeeForm";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/employees")
      .then(res => {
        console.log(res.data); // Ensure data is coming through
        setEmployees(res.data);
      })
      .catch(err => console.log(err)); // Log any errors
  }, []);

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  return (
    <div>
      <h2>Employee List</h2>
      {editingEmployee ? (
        <EmployeeForm
          employee={editingEmployee}
          setEditingEmployee={setEditingEmployee}
        />
      ) : (
        employees.length > 0 ? (
          employees.map(emp => (
            <EmployeeItem key={emp._id} employee={emp} onEdit={handleEdit} />
          ))
        ) : (
          <p>No employees found</p>
        )
      )}
    </div>
  );
}

export default EmployeeList;

