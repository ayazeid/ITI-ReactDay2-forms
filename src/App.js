import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";
import ToDo from "./forms/ToDo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={LoginForm} />
          {/* <LoginForm /> */}
          <Route exact path="/register" component={RegisterForm} />
          {/* <RegisterForm /> */}
          <Route exact path="/todo" component={ToDo} />
          {/* <ToDo /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
