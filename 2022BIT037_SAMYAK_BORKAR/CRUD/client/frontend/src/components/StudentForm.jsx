import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = ({ fetchStudents }) => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    branch: '',
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/students', student);
    fetchStudents();
    setStudent({ name: '', email: '', phone: '', address: '', branch: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-lg shadow-xl p-6 rounded-xl space-y-4"
    >
      {['name', 'email', 'phone', 'address', 'branch'].map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          value={student[field]}
          onChange={handleChange}
          placeholder={field.toUpperCase()}
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
      ))}
<button
  type="submit"
  className="block w-3/4 mx-auto bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-lg mt-4 transform transition duration-300 hover:scale-105 hover:shadow-lg"
>
  Add Student
</button>

    </form>
  );
};

export default StudentForm;
