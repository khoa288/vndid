import React from "react";

import GovernmentLogo from "./images/government.png";
import SignUpForm from "./SignUpForm";

function Government() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-20">
      {/* Title Page */}
      <div className="w-screen flex flex-col items-center justify-center gap-9">
        <span className="text-2xl">Government Page</span>
        <img src={GovernmentLogo} alt="" className="w-28" />
      </div>
      {/* Form Submit */}
      <div className="w-full flex items-center justify-center">
        <SignUpForm />
      </div>
    </div>
  );
}

export default Government;
