const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

// API routes
app.use("/api/users", userRoutes);

module.exports = app;
