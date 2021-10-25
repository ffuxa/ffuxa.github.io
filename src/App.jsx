import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SudokuSolver from "./containers/SudokuSolver/SudokuSolver";
import Home from "./containers/Home/Home";
import SoulSacrificeCastingCall from "./containers/Groove/SoulSacrificeCastingCall/SoulSacrificeCastingCall";
import RickAstley from "./containers/Groove/RickAstley/RickAstley";
import CastingCallNumeroDos from "./containers/Groove/CastingCallNumeroDos/CastingCallNumeroDos";
import CastingNumeroDos from "./containers/Groove/CastingNumeroDos/CastingNumeroDos";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/sudoku" component={SudokuSolver} />
          <Route
            path="/groove/soulsacrifice"
            component={SoulSacrificeCastingCall}
          />
          <Route path="/groove/my_story" component={RickAstley} />
          <Route path="/groove/castingcall2" component={CastingCallNumeroDos} />
          <Route path="/groove/casting2" component={CastingNumeroDos} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
