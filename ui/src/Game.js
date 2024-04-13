import React, { useState } from "react";
import GameLogo from "./images/joystick.png";

import loading from "./images/loading.gif";
import checked from "./images/checked.png";
import cancel from "./images/cancel.png";

function Game() {
  const [identity, setIdentity] = useState("0123456789");
  const [loading, setLoading] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleIdentityChange = (e) => {
    setIdentity(e.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    // Simulate server response with a delay
    setTimeout(() => {
      // Replace this with actual server request
      const serverResponse = Math.random() < 0.5; // Simulate success or failure
      setSubmissionResult(serverResponse ? "success" : "fail");
      setLoading(false);
    }, 2000); // Simulate 2 seconds delay
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-20">
      {/* Title Page */}
      <div className="w-screen flex flex-col items-center justify-center gap-9">
        <span className="text-2xl">Game Register Page</span>
        <img src={GameLogo} alt="" className="w-28" />
      </div>
      {/* Form Submit */}
      <div className="w-full flex items-center justify-center">
        <form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="inline-identity-number"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Identity Number
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                id="inline-identity-number"
                type="text"
                value={identity}
                onChange={handleIdentityChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
          </div>

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
      </div>

      {/* Loading text */}
      {loading && (
        <div>
          {/* <img src={loading} alt="Loading..." /> */}
          <p>Loading...</p>
        </div>
      )}

      {/* Submission result */}
      {
        submissionResult &&
          (submissionResult === "success" ? (
            <div className="flex flex-row gap-4 items-center justify-center">
              <img src={checked} alt="" className="w-9" />
              <p>Verify Successfully</p>
            </div>
          ) : (
            <div className="flex flex-row gap-4 items-center justify-center">
              <img src={cancel} alt="" className="w-9" />
              <p>Verify Failed</p>
            </div>
          ))
        // <p>
        //   {submissionResult === "success"
        //     ? "Form submitted successfully"
        //     : "Form submission failed"}
        // </p>
      }
    </div>
  );
}

export default Game;
