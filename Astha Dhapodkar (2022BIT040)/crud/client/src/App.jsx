import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const addUser = (user) => {
    user.id = Date.now();
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditUser(null);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">React CRUD - Users</h2>
      <UserForm addUser={addUser} updateUser={updateUser} editUser={editUser} />
      <UserTable users={users} deleteUser={deleteUser} setEditUser={setEditUser} />
    </div>
  );
}

export default App;
