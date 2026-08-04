const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/health", healthRoutes);

module.exports = app;