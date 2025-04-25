import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

const App = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/students');
      setStudents(res.data);
    } catch (error) {
      console.error("Error fetching students", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
  <h1 className="text-3xl text-center text-white mb-6">Student Info CRUD App</h1>
  <StudentForm fetchStudents={fetchStudents} />
  <StudentList students={students} fetchStudents={fetchStudents} />
</div>

  );
};

export default App;
