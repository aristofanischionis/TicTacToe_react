import React from 'react';
import { calculateWinner } from './calculateWinner.jsx';
import { Board } from "./Board.jsx"

export class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true,
        ascendingOrder : true,
        clicked : null,
      };
    }
  
    handleClick(i, row, col) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([
          {
            squares: squares,
            clicked: [row, col]
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  
    jumpTo(step) {
      console.log('step: ', step)
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }

    toggleOrder(){
      this.setState({
        ascendingOrder: !this.state.ascendingOrder,
      })
    }
    
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
  
      let status;
      if (winner) {
        current.squares.winSquares = winner[3];
        status = "Winner: " + winner[0];
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }

      const moves = history.map((step, move) => {
        let desc = 'Game Start';
        let row = null;
        let col = null;

        if(move){
          desc = 'Move: #' + move;
          row = '(' + this.state.history[move].clicked[0]+',';
          col = this.state.history[move].clicked[1]+')';
        }
        
        const isBold = ((this.state.stepNumber === move) ? 'bold' : '');        
        return (
          <li key={move}>
            <button 
                onClick={() => this.jumpTo(move)}><span style={{fontWeight: isBold }}>{desc} {row} {col}</span>
            </button>
          </li>
        );
      });
  
      //toggle button
      if(!this.state.ascendingOrder){
        moves.sort(function(a,b){
          return b.key - a.key;
        });
      }
      
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i,row,col) => this.handleClick(i,row,col)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
            <button onClick = {() => this.toggleOrder()}>Toggle Order</button>
          </div>
        </div>
      );
    }
  }