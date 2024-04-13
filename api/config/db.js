const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose
	.connect(process.env.MONGODB_URI)
	.then((res) => {
		console.log("Database connected");
	})
	.catch((error) => {
		console.log(error);
	});
