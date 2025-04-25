import React from 'react';

function UserTable({ users, deleteUser, setEditUser }) {
  return (
    <table className="table table-bordered">
      <thead className="table-light">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => setEditUser(user)} className="btn btn-warning btn-sm me-2">Edit</button>
                <button onClick={() => deleteUser(user.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr><td colSpan="6" className="text-center">No users found.</td></tr>
        )}
      </tbody>
    </table>
  );
}

export default UserTable;
