import "./App.css";
import Login from "./pages/Login";
import Wallet from "./pages/Login";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/wallet" element={<Wallet />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
