const router = require("express").Router();
const CitizenWallet = require("../models/CitizenWallet");

const contract = require("./abi.json");
const ethers = require("ethers");
const JsonRpcProvider = require("ethers").JsonRpcProvider;
const circomlibjs = require("circomlibjs");

async function poseidonHash(inputs) {
	const poseidon = await circomlibjs.buildPoseidon();
	const poseidonHash = poseidon.F.toString(poseidon(inputs));
	return poseidonHash;
}

async function mintIdentity(signer, name, DoB, dIdentityContract) {
	const UID = ethers.sha256(ethers.toUtf8Bytes(signer.address + name + DoB));
	const nameHash = ethers.sha256(ethers.toUtf8Bytes(signer.address + name));
	const DoBHash = await poseidonHash([signer.address, DoB]);

	const identity = {
		UID: UID,
		nameHash: nameHash,
		dobHash: DoBHash,
	};

	console.log(identity);

	const tx = await dIdentityContract.mint(signer.address, identity);
	tx.wait();
	return tx;
}

router.post("/mintIdentity", async (req, res) => {
	const alchemyProvider = new JsonRpcProvider(process.env.API_URL);
	const privateKey = process.env.PRIVATE_KEY;
	const signer = new ethers.Wallet(privateKey, alchemyProvider);
	const zkidContract = new ethers.Contract(
		process.env.CONTRACT_ADDRESS,
		contract,
		signer
	);

	const { name, DoB, id } = req.body;

	const address = signer.address;

	const DoBTimestamp = Date.parse(DoB);
	const UID = ethers.sha256(ethers.toUtf8Bytes(signer.address + name + DoB));
	const newCitizenWallet = new CitizenWallet({ address, name, DoB, id, UID });
	newCitizenWallet.save();
	const result = await mintIdentity(signer, name, DoBTimestamp, zkidContract);

	console.log(result);

	res.status(200).json({ message: result, uid: UID });
});

router.post("/createClaim", async (req, res) => {
	const alchemyProvider = new JsonRpcProvider(process.env.API_URL);

	const privateKey = process.env.PRIVATE_KEY;

	const signer = new ethers.Wallet(privateKey, alchemyProvider);

	const zkidContract = new ethers.Contract(
		process.env.CONTRACT_ADDRESS,
		contract,
		signer
	);

	const { address, entity, data } = req.body;

	const result = await createClaim(
		signer,
		address,
		entity,
		data,
		zkidContract
	);

	res.status(200).json({ message: result });
});

module.exports = router;
