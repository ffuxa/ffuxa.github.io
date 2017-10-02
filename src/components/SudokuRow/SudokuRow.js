import React, { Component } from 'react';
import './SudokuRow.css';

export default class SudokuRow extends Component {
  update(index, event) {
    let value = event.target.value;
    let grid = this.props.grid;

    if (value === "" || this.invalidCharacter(value)) {
      value = "0";
    }

    grid[this.props.index][index] = Number(value);
    this.props.updateGrid(grid);
  }

  invalidCharacter(value) {
    return value < 1 ||
           value > 9 ||
           value % 1 !== 0 ||
           value === "-" ||
           value === "e" ||
           value === "E";
  }

  render() {
    return (
      <div>
        <span className="sudoku-box-row">
          <input className="sudoku-number"
                 type="number"
                 onChange={this.update.bind(this, 0)}
                 value={
                   this.props.grid[this.props.index][0] === 0 ?
                      "" : this.props.grid[this.props.index][0]
                 } />

          <input className="sudoku-number"
                 type="number"
                 onChange={this.update.bind(this, 1)}
                 value={
                    this.props.grid[this.props.index][1] === 0 ?
                        "" : this.props.grid[this.props.index][1]
                 } />
          <input className="sudoku-number"
                 type="number"
                 onChange={this.update.bind(this, 2)}
                 value={
                    this.props.grid[this.props.index][2] === 0 ?
                        "" : this.props.grid[this.props.index][2]
                  } />
        </span>

        <span className="sudoku-box-row">
          <input className="sudoku-number"
                 type="number"
                 onChange={this.update.bind(this, 3)}
                 value={
                   this.props.grid[this.props.index][3] === 0 ?
                      "" : this.props.grid[this.props.index][3]
                 } />

          <input className="sudoku-number"
                 type="number"
                 onChange={this.update.bind(this, 4)}
                 value={
                    this.props.grid[this.props.index][4] === 0 ?
                        "" : this.props.grid[this.props.index][4]
                 } />
          <input className="sudoku-number"
                 type="number"
                 onChange={this.update.bind(this, 5)}
                 value={
                    this.props.grid[this.props.index][5] === 0 ?
                        "" : this.props.grid[this.props.index][5]
                  } />
        </span>

        <span className="sudoku-box-row">
          <input className="sudoku-number"
                 type="number"
                 onChange={this.update.bind(this, 6)}
                 value={
                   this.props.grid[this.props.index][6] === 0 ?
                      "" : this.props.grid[this.props.index][6]
                 } />

          <input className="sudoku-number"
                 type="number"
                 onChange={this.update.bind(this, 7)}
                 value={
                    this.props.grid[this.props.index][7] === 0 ?
                        "" : this.props.grid[this.props.index][7]
                 } />
          <input className="sudoku-number"
                 type="number"
                 onChange={this.update.bind(this, 8)}
                 value={
                    this.props.grid[this.props.index][8] === 0 ?
                        "" : this.props.grid[this.props.index][8]
                  } />
        </span>
      </div>
    );
  }
}
