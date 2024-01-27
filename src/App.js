import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import SuccessPage from "./pages/SuccessPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        {/* Use Routes instead of Switch */}
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
