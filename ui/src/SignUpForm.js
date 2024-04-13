import React, { useState } from "react";

function SignUpForm() {
  const [indentity, setIndentity] = useState("0123456789");
  const [fullName, setFullName] = useState("Jane Doe");
  const [dob, setDoB] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const hanleIndetityChange = (e) => {
    setIndentity(e.target.value);
  };

  const handleDoBChange = (e) => {
    setDoB(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted");
    console.log({ indentity: indentity, fullName: fullName, dob: dob });
    if (indentity !== "" || fullName !== "" || dob !== "") {
      alert("Please fill all the fields");
    }
  };

  return (
    <form className="w-full max-w-sm">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            htmlFor="inline-indentity-number"
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          >
            Identity Number
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            id="inline-indentity-number"
            type="text"
            value={indentity}
            onChange={hanleIndetityChange}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            htmlFor="inline-full-name"
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          >
            Full Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            id="inline-full-name"
            type="text"
            value={fullName}
            onChange={handleFullNameChange}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            htmlFor="inline-DoB"
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          >
            Date Of Birth
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            id="inline-DoB"
            type="Date"
            placeholder="YYYY-MM-DD"
            value={dob}
            onChange={handleDoBChange}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
      </div>
      {/* <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3"></div>
        <label
          htmlFor="inline-DoB"
          className="md:w-2/3 block text-gray-500 font-bold"
        >
          <input
            id="inline-DoB"
            type="checkbox"
            checked={dob}
            onChange={handleDoBChange}
            className="mr-2 leading-tight"
          />
          <span className="text-sm">Send me your newsletter!</span>
        </label>
      </div> */}
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            onClick={handleSubmit}
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
