const mongoose = require("mongoose");

const citizenWalletSchema = new mongoose.Schema({
	address: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	DoB: {
		type: String,
		required: true,
	},
	id: {
		type: String,
		required: true,
	},
	UID: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("CitizenWallet", citizenWalletSchema);
