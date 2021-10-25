import * as React from 'react';
import SudokuRow from './SudokuRow/SudokuRow';
import random_boards from './utils/boards';
import './SudokuSolver.css';

class SudokuSolver extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grid: [
        [3, 0, 6, 5, 0, 8, 4, 0, 0],
        [5, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 8, 7, 0, 0, 0, 0, 3, 1],
        [0, 0, 3, 0, 1, 0, 0, 8, 0],
        [9, 0, 0, 8, 6, 3, 0, 0, 5],
        [0, 5, 0, 0, 9, 0, 6, 0, 0],
        [1, 3, 0, 0, 0, 0, 2, 5, 0],
        [0, 0, 0, 0, 0, 0, 0, 7, 4],
        [0, 0, 5, 2, 0, 6, 3, 0, 0],
      ],
      error: false,
      row: null,
      col: null,
    }
  }

  emptyGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  updateGrid(new_grid) {
    this.setState({grid: new_grid});
    console.log(this.state.grid)
  }

  solve() {
    let solved = this.solveSudoku(this.state.grid, 0, 0);

    if (!solved) {
      this.setState({ error: true })
    }
  }

  solveSudoku(grid, row, col) {
    let cellCoordinates = this.findUnassignedLocation(grid, row, col);
    row = cellCoordinates[0];
    col = cellCoordinates[1];

    if (row === -1) {
      console.log("Puzzle Solved!");
      return true;
    }

    for (let num = 1; num <= 9; num++) {
      if (this.noConflicts(grid, row, col, num)) {
        grid[row][col] = num;
        this.setState({grid: grid});

        if (this.solveSudoku(grid, row, col)) { return true; }

        grid[row][col] = 0;
        this.setState({grid: grid});
      }
    }

    return false;
  }


  findUnassignedLocation(grid, row, col) {
    var done = false;
    var cellCoordinates = [-1, -1];

    while (!done) {
      if (row === 9) {
        done = true;
      }
      else {
        if (grid[row][col] === 0) {
          cellCoordinates[0] = row;
          cellCoordinates[1] = col;
          done = true;
        }
        else {
          if (col < 8) {
            col++;
          }
          else {
            row++;
            col = 0;
          }
        }
      }
    }

    return cellCoordinates;
  }

  noConflicts(grid, row, col, num) {
    return this.notUsedInRow(grid, row, num) &&
           this.notUsedInCol(grid, col, num) &&
           this.notUsedInBox(grid, row, col, num);
  }

  notUsedInRow(grid, row, num) {
    for (var col = 0; col < 9; col++) {
      if (grid[row][col] === num) {
        return false;
      }
    }

    return true;
  }

  notUsedInCol(grid, col, num) {
    for (var row = 0; row < 9; row++) {
      if (grid[row][col] === num) {
        return false;
      }
    }

    return true;
  }

  notUsedInBox(grid, row, col, num) {
    row = Math.floor(row / 3) * 3;
    col = Math.floor(col / 3) * 3;

    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < 3; c++) {
        if (grid[row + r][col + c] === num) {
          return false;
        }
      }
    }

    return true;
  }

  clear_grid() {
    this.setState({
      grid: this.emptyGrid
    });

    console.log(this.state.grid)
  }

  load_random_board() {
    let index =  Math.floor(Math.random() * random_boards.length);

    this.setState({
      grid: random_boards[index]
    });
  }

  render() {
    return (
      <div>
        <p id="title">Sudoku Solver</p>
        <div>
          <div id="sudoku-container">
            <div className="sudoku-row-of-boxes">
              <SudokuRow grid={this.state.grid} index={0} updateGrid={this.updateGrid.bind(this)}/>
              <SudokuRow grid={this.state.grid} index={1} updateGrid={this.updateGrid.bind(this)}/>
              <SudokuRow grid={this.state.grid} index={2} updateGrid={this.updateGrid.bind(this)}/>
            </div>

            <div className="sudoku-row-of-boxes">
              <SudokuRow grid={this.state.grid} index={3} updateGrid={this.updateGrid.bind(this)}/>
              <SudokuRow grid={this.state.grid} index={4} updateGrid={this.updateGrid.bind(this)}/>
              <SudokuRow grid={this.state.grid} index={5} updateGrid={this.updateGrid.bind(this)}/>
            </div>

            <div className="sudoku-row-of-boxes">
              <SudokuRow grid={this.state.grid} index={6} updateGrid={this.updateGrid.bind(this)}/>
              <SudokuRow grid={this.state.grid} index={7} updateGrid={this.updateGrid.bind(this)}/>
              <SudokuRow grid={this.state.grid} index={8} updateGrid={this.updateGrid.bind(this)}/>
            </div>
          </div>
        </div>

        {this.state.error &&
          <p>Error! There is no unique solution to this puzzle</p>
        }

        <div id="below-sudoku">
          <button id="solve"
                  className="btn btn-primary"
                  onClick={() => this.solve()}>
            Solve!
          </button>

          <button id="clear"
                  className="btn btn-danger"
                  onClick={() => this.clear_grid()}>
            Clear
          </button>

          <button id="clear"
                  className="btn btn-primary"
                  onClick={() => this.load_random_board()}>
            Random
          </button>
        </div>
      </div>
    );
  }
}

export default SudokuSolver;
