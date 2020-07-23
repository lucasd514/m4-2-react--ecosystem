import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header";
import Homepage from "./homepage";
import About from "./aboutUs";
import ItemDetails from "./ItemDetails";

const App = (props) => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/items/:itemId">
          <ItemDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
