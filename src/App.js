import React, { useState, useEffect } from "react";
import "./App.css";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";
import ToDo from "./forms/ToDo";

function App() {
  return (
    <div className="App">
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      <ToDo />
    </div>
  );
}

export default App;
