const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB using recommended modern syntax
mongoose.connect("mongodb://localhost:27017/crud")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Define Mongoose schema and model
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    address: String,
    date: String // You can change this to Date if needed
});

const User = mongoose.model("User", UserSchema);

// Get all users
app.get("/", (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err));
});

// Create user
app.post("/createUser", (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
});

// Get single user by ID
app.get("/getUser/:id", (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
});

// Update user by ID
app.put("/updateUser/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
});

// Delete user by ID
app.delete("/deleteUser/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.send("User Deleted"))
        .catch(err => res.status(500).json(err));
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
