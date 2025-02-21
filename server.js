const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Change as needed
    password: "", // Add your MySQL password if set
    database: "papa_hut_db"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL Database");
    }
});

// API Routes

// Fetch menu items
app.get("/menu", (req, res) => {
    db.query("SELECT * FROM menu", (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Add menu item
app.post("/menu", (req, res) => {
    const { name, price } = req.body;
    db.query("INSERT INTO menu (name, price) VALUES (?, ?)", [name, price], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Item added successfully", id: result.insertId });
    });
});

// Delete menu item
app.delete("/menu/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM menu WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Item deleted successfully" });
    });
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
