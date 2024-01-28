// import React, { useState } from "react";
// import { CognitoUser } from "amazon-cognito-identity-js";
// import userPool from "../CognitoConfig.js";

// const ConfirmAccount = () => {
//   const [username, setUsername] = useState("");
//   const [code, setCode] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const userData = {
//       Username: username,
//       Pool: userPool,
//     };

//     const cognitoUser = new CognitoUser(userData);
//     cognitoUser.confirmRegistration(code, true, (error, result) => {
//       if (error) {
//         setMessage(error.message || JSON.stringify(error));
//         return;
//       }
//       setMessage("Account confirmed successfully.");
//       // Redirect to login page or similar
//     });
//   };

//   return (
//     <div>
//       <h1>Confirm Account</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Username"
//         />
//         <input
//           type="text"
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//           placeholder="Verification Code"
//         />
//         <button type="submit">Confirm</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ConfirmAccount;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CognitoUser } from "amazon-cognito-identity-js";
import userPool from "../CognitoConfig.js";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const username = location.state?.username; // Get the username passed from the Signup component

  const verifyUser = async () => {
    const userData = {
      Username: username,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(otp, true, (err) => {
      if (err) {
        setError(err.message || JSON.stringify(err));
        return;
      }
      navigate("/login"); // Redirect to login page after successful verification
    });
  };

  return (
    <div>
      <h1>Verify OTP</h1>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={verifyUser}>Verify</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default VerifyOTP;
