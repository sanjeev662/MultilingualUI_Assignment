import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/login/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      <Login />
    </div>
  );
};

export default App;
