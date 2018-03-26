import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import SudokuSolver from './containers/SudokuSolver/SudokuSolver';
import Home from './containers/Home/Home';
import SoulSacrificeCastingCall from './containers/SoulSacrificeCastingCall/SoulSacrificeCastingCall';
import RickAstley from './containers/RickAstley/RickAstley';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/sudoku" component={SudokuSolver} />
        <Route path="/soulsacrifice" component={SoulSacrificeCastingCall} />
        <Route path="/my_story" component={RickAstley} />
      </div>
    </Router>
  );
}

export default App;
