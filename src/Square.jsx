import React from 'react';
import './index.css';

export function Square(props) {
    let red = props.winner ? ' red' : '';
    return (
      <button className={"square" + red} onClick={props.onClick}>
        {props.value}
      </button>
    );
  };