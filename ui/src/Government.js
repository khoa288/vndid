import React, { useState } from "react";

import GovernmentLogo from "./images/government.png";
import SignUpForm from "./SignUpForm";

function Government() {
	const [hash, setHash] = useState("");
	const [UID, setUID] = useState("");
	const [id, setId] = useState("0123456789");
	const [name, setName] = useState("Jane Doe");
	const [dob, setDoB] = useState("");

	const handleFullNameChange = (e) => {
		setName(e.target.value);
	};

	const hanleIndetityChange = (e) => {
		setId(e.target.value);
	};

	const handleDoBChange = (e) => {
		setDoB(e.target.value);
	};

	async function handleSubmit(e) {
		e.preventDefault();

		const response = await fetch(
			"http://localhost:5173/citizenWallet/mintIdentity",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name: name, DoB: dob, id: id }),
			}
		);
		console.log(response);
		const data = await response.json();
		setHash(data.message.hash);
		setUID(data.uid);
	}

	return (
		<div className="flex flex-col justify-center items-center w-screen h-screen gap-20">
			{/* Title Page */}
			<div className="w-screen flex flex-col items-center justify-center gap-9">
				<span className="text-2xl">Government Page</span>
				<img src={GovernmentLogo} alt="" className="w-28" />
			</div>
			{/* Form Submit */}
			<div className="w-full flex items-center justify-center">
				<SignUpForm
					handleSubmit={handleSubmit}
					handleFullNameChange={handleFullNameChange}
					hanleIndetityChange={hanleIndetityChange}
					handleDoBChange={handleDoBChange}
					indentity={id}
					fullName={name}
					dob={dob}
				/>
			</div>
			<div>
				<p>
					Transaction: <a>https://sepolia.etherscan.io/tx/{hash}</a>
				</p>
				<p>UID: {UID}</p>
			</div>
		</div>
	);
}

export default Government;
