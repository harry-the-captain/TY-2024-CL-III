import React, { useState } from 'react';
import axios from 'axios';

const StudentList = ({ students, fetchStudents }) => {
  const [editId, setEditId] = useState(null);
  const [updatedData, setUpdatedData] = useState({});

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/api/students/${id}`);
    fetchStudents();
  };

  const updateStudent = async (id) => {
    await axios.put(`http://localhost:5000/api/students/${id}`, updatedData);
    setEditId(null);
    fetchStudents();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {students.map((student) => (
        <div key={student._id} className="bg-[#1e1e2f] p-4 rounded-lg shadow-lg text-white">
          {editId === student._id ? (
            <div>
              <input type="text" placeholder="Name" className="input-class"
                onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })} />
              <input type="text" placeholder="Email" className="input-class"
                onChange={(e) => setUpdatedData({ ...updatedData, email: e.target.value })} />
              <button className="btn-primary" onClick={() => updateStudent(student._id)}>Save</button>
            </div>
          ) : (
            <>
              <h2 className="text-xl">{student.name}</h2>
              <p>{student.email}</p>
              <div className="flex gap-2 mt-2">
                <button className="btn-warning" onClick={() => setEditId(student._id)}>Update</button>
                <button className="btn-danger" onClick={() => deleteStudent(student._id)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default StudentList;
