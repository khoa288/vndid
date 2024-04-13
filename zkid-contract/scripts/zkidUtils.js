const {
	prepareContractCall,
	sendTransaction,
	resolveMethod,
} = require("thirdweb");

const _soul = "example_soul";
const _identityData = "example_identity_data";

// const account = "wallet_address_here";

async function mintNFT() {
	const transaction = await prepareContractCall({
		contract,
		method: resolveMethod("mint"),
		params: [_soul, _identityData],
	});

	const { transactionHash } = await sendTransaction({
		transaction,
		account,
	});

	console.log(`Transaction hash: ${transactionHash}`);
}

mintNFT().catch(console.error);
