import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BookContainer } from "./components/BookContainer";
import "./App.css";
// import Login from "./components/Login";

const App = () => {
  return (
    <div className="App">
      <BookContainer />
    </div>
  );
};

export { App };
