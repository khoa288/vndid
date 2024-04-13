const router = require("express").Router();
const UserWallet = require("../models/UserWallet");

router.post("/map", async (req, res) => {
	const { walletAddress, username } = req.body;

	try {
		const newUserWallet = new UserWallet({ walletAddress, username });
		await newUserWallet.save();

		res.status(201).json({
			message: "Mapping successful",
			data: newUserWallet,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

router.get("/search", async (req, res) => {
	const { walletAddress } = req.body;

	try {
		const userWallet = await UserWallet.findOne({ walletAddress });

		if (!userWallet) {
			return res.status(404).json({ message: "User not found" });
		}

		res.status(200).json({
			message: "User found",
			data: { username: userWallet.username },
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

router.put("/modify", async (req, res) => {
	const { walletAddress, newUsername } = req.body;

	try {
		const userWallet = await UserWallet.findOneAndUpdate(
			{ walletAddress },
			{ username: newUsername },
			{ new: true }
		);

		if (!userWallet) {
			return res.status(404).json({ message: "User not found" });
		}

		res.status(200).json({
			message: "Username updated successfully",
			data: userWallet,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

router.delete("/delete", async (req, res) => {
	const { walletAddress } = req.body;

	try {
		const deletedUserWallet = await UserWallet.findOneAndDelete({
			walletAddress,
		});

		if (!deletedUserWallet) {
			return res.status(404).json({ message: "User not found" });
		}

		res.status(200).json({
			message: "Mapping deleted successfully",
			data: deletedUserWallet,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

module.exports = router;
