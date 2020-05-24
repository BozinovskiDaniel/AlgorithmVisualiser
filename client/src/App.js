import React from "react";
import "./App.scss";
import PathFindingAlgorithms from "./pages/PathfindingAlgorithms";
import SortingAlgorithms from "./pages/SortingAlgorithms";
import GameOfLife from "./pages/GameOfLife";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PathFindingAlgorithms} />
        <Route path="/sorting" component={SortingAlgorithms} />
        <Route path="/gameoflife" component={GameOfLife} />
      </Switch>
    </Router>
  );
}

export default App;
