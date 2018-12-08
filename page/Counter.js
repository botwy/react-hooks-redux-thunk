import React from 'react';

export const Counter = ({ count, getCounterNextNumber }) => {

  console.log("Counter render")

  return (
    <div style={{marginTop: 10, display: "flex", flexDirection: "row"}}>
      <div>{`${count} `}</div>
      <div style={{marginLeft: 5}}>
        <button onClick={getCounterNextNumber}>+</button>
      </div>
    </div>
  );
}