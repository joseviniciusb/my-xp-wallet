import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import "./App.css";
import Login from "./pages/Login";
import DepositWithdraw from "./pages/DepositWithdraw";
import Stocks from "./pages/Stocks";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
     <Switch>
      <Route path="/depositWithdraw">
        <DepositWithdraw />
      </Route>
      <Route path="/stocks">
        <Stocks />
      </Route>
      <Route path="/checkout=:id">
        <Checkout />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
    </>
   
  );
  
}


export default App;
