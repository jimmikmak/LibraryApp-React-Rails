import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BookContainer } from "./components/BookContainer";
import "./App.css";
// import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/books/create">
            <BookContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export { App };
