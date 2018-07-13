import React from 'react';

export function Square(props) {
    let highlight = props.winner ? ' red' : '';
    return (
      <button className={"square"+highlight} onClick={props.onClick}>
        {props.value}
      </button>
    );
  };