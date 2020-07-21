import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header";

const App = (props) => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          Daje
        </Route>
        <Route exact path="/about">
          ROMA
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
