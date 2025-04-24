import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateUsers() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = { name, email, age, address, date };

        axios.post("http://localhost:3001/createUser", newUser)
            .then((result) => {
                console.log("User Created:", result.data);
                alert("User Created Successfully!");
                navigate("/");
            })
            .catch((err) => {
                console.error("Error creating user:", err);
                alert("Failed to create user!");
            });
    };

    return (
        <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-4 shadow">
                <h2 className="text-center">Create User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input
                            type="number"
                            className="form-control"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        <input
                            type="date"
                            className="form-control"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100">
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateUsers;