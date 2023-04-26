// Dependencies
import React from "react";
import { Login } from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./tailwind.output.css";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
