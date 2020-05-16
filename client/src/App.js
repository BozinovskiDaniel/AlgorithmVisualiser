import React from "react";
import "./App.scss";
import PathFindingAlgorithms from "./pages/PathfindingAlgorithms";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PathFindingAlgorithms} />
      </Switch>
    </Router>
  );
}

export default App;
