import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login";
import Wallet from "./pages/Wallet";
import Stocks from "./pages/Stocks";

function App() {
  return (
        <Switch>
          <Route path="/wallet">
            <Wallet />
          </Route>
          <Route path="/stocks">
            <Stocks />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
  );
}

export default App;
