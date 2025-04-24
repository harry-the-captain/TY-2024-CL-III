import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", email: "", age: "", address: "", date: "" });

    useEffect(() => {
        axios.get(`http://localhost:3001/getUser/${id}`)
            .then(result => setUser(result.data))
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/updateUser/${id}`, user)
            .then(() => navigate("/"))
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-light rounded p-3">
                <h2>Update User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Age</label>
                        <input
                            type="number"
                            className="form-control"
                            value={user.age}
                            onChange={(e) => setUser({ ...user, age: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Address</label>
                        <input
                            type="text"
                            className="form-control"
                            value={user.address}
                            onChange={(e) => setUser({ ...user, address: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Date</label>
                        <input
                            type="date"
                            className="form-control"
                            value={user.date}
                            onChange={(e) => setUser({ ...user, date: e.target.value })}
                        />
                    </div>
                    <button className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;