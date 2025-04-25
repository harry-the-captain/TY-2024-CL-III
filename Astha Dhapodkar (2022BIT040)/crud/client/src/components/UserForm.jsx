import React, { useState, useEffect } from 'react';

const initialForm = { name: '', email: '', age: '', role: '' };

function UserForm({ addUser, updateUser, editUser }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (editUser) {
      setForm(editUser);
    }
  }, [editUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.age && form.role) {
      editUser ? updateUser(form) : addUser(form);
      setForm(initialForm);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-2">
        <div className="col"><input name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Name" /></div>
        <div className="col"><input name="email" value={form.email} onChange={handleChange} className="form-control" placeholder="Email" /></div>
        <div className="col"><input name="age" value={form.age} onChange={handleChange} className="form-control" placeholder="Age" /></div>
        <div className="col"><input name="role" value={form.role} onChange={handleChange} className="form-control" placeholder="Role" /></div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            {editUser ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default UserForm;
