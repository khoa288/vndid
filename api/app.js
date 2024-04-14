const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./config/db");

const citizenWalletRoutes = require("./controller/citizenController");

const app = express();
app.use(express.json());
app.use(
	cors({
		credentials: true,
		origin: process.env.CLIENT_URL,
	})
);

const port = process.env.PORT || 3000;

app.use("/citizenWallet", citizenWalletRoutes);

// Default route for unmatched routes
app.all("*", (req, res) => {
	res.status(404).json({ message: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: "Internal server error" });
});

module.exports = app;
