const { createThirdwebClient, getContract } = require("thirdweb");
const { sepolia } = require("thirdweb/chains");

// create the client with your clientId
const client = createThirdwebClient({
	clientId: "",
});

// connect to contract
const contract = getContract({
	client,
	chain: sepolia,
	address: "0xA79941AF11189B4Ca082FBC7be5cd11034d32580",
});

module.exports = { contract };
