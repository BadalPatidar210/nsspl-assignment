import React from "react";
import "./App.css";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import DashboardScreen from "./components/DashboardScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Link to="/">
            <LoginScreen />
          </Link>
          <Link to="/dashboard">
            <DashboardScreen />
          </Link>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
