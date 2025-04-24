import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001")
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        axios.delete(`http://localhost:3001/deleteUser/${id}`)
            .then(() => {
                setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
            })
            .catch(err => console.log(err));
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f4f4f4" }}>
            <div style={{ width: "90%", padding: "20px", background: "white", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
                <h2 style={{ textAlign: "center" }}>User List</h2>
                <Link to="/create" style={{ display: "inline-block", marginBottom: "10px", padding: "8px 15px", backgroundColor: "#007bff", color: "white", textDecoration: "none", borderRadius: "5px" }}>Add User</Link>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={{ backgroundColor: "#007bff", color: "white" }}>
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Email</th>
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Age</th>
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Address</th>
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Date</th>
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user._id} style={{ textAlign: "center", backgroundColor: "#f9f9f9" }}>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.name}</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.email}</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.age}</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.address}</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.date}</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                        <Link to={`/update/${user._id}`} style={{ padding: "5px 10px", backgroundColor: "#28a745", color: "white", textDecoration: "none", borderRadius: "5px", marginRight: "5px" }}>Update</Link>
                                        <button onClick={() => handleDelete(user._id)} style={{ padding: "5px 10px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" style={{ textAlign: "center", padding: "10px" }}>No Users Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
