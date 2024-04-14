import React, { useState, useEffect } from "react";

function Verify() {
  const [showButtons, setShowButtons] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);
  const [userChoiceMade, setUserChoiceMade] = useState(false);

  useEffect(() => {
    // Simulate server delay of 5 seconds before showing the buttons
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 5000);

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []); // This effect runs only once on component mount

  const handleYesClick = () => {
    setVerificationResult("success");
    setUserChoiceMade(true);
  };

  const handleNoClick = () => {
    setVerificationResult("fail");
    setUserChoiceMade(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {showButtons ? (
        <div className="text-center">
          {!userChoiceMade ? (
            <div>
              <p className="text-lg mb-4">Do you want to proceed?</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleYesClick}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                  Yes
                </button>
                <button
                  onClick={handleNoClick}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  No
                </button>
              </div>
            </div>
          ) : (
            <p className="text-lg mb-4">
              {verificationResult === "success"
                ? "You verified successfully"
                : "You denied verify the service"}
            </p>
          )}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg mb-4">Waiting for server response...</p>
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}

export default Verify;
