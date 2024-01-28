import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/Signup.jsx";
import SuccessPage from "./pages/SuccessPage.js";
import VerifyOTP from "./pages/VerifyOTP.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
