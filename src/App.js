import React from "react";
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

          <Route exact path="/register" component={RegisterForm} />

          <Route exact path="/todo" component={ToDo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
