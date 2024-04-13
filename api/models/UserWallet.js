const mongoose = require("mongoose");

const userWalletSchema = new mongoose.Schema({
	walletAddress: {
		type: String,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("UserWallet", userWalletSchema);
