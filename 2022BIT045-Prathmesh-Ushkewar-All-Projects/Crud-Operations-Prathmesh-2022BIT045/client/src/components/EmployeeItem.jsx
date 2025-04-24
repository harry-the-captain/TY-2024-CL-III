import axios from "axios";

function EmployeeItem({ employee, onEdit }) {
  console.log(employee); // Log the employee prop to check data

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/employees/${employee._id}`);
    window.location.reload();
  };

  return (
    <div>
      <h3>{employee.name}</h3>
      <p>{employee.email} - {employee.position} - {employee.department} - ${employee.salary}</p>
      <button onClick={() => onEdit(employee)}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default EmployeeItem;

