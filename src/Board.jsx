import React from 'react';
import { Square } from './Square.jsx';

export class Board extends React.Component {
    renderSquare(i, row, col, win) {
      return (
        <Square
            key = {i}
            winner = {win}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i, row, col)}
        />
      );
    }
  
    render() {
        let squares = [];
        let num = 0;
        let row = [];
        let win = false;
        for (let i=1; i <= 3; i++){
            row = [];
            for(let j=1; j <=3 ; j++){
                if(this.props.squares.winSquares){
                    win = this.props.squares.winSquares.indexOf(num) !== -1 ? true : false;
                }
                row.push(this.renderSquare(num,i,j,win)); 
                num ++;
            }
            squares.push(<div key = {num} className = "board-row">{row}</div>);
        }

      return (
        <div>
            {squares}
        </div>
      );
    }
  }