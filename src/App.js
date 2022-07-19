import "./App.css";
import Login from "./pages/Login";
import Wallet from "./pages/Wallet";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
