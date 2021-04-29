import React, { useState, useEffect } from "react";
import Square from "./Square";
import Player from "./Player";
import "./css/board.css";

const Board = () => {
  const [values, setValues] = useState(["", "", "", "", "", "", "", "", ""]);
  
  const [running, setRunning] = useState("-");
  
  const [gameOver, setGameOver] = useState("");
  
  const [winner, setWinner] = useState(false);
  
  const [counter, setCounter] = useState(0);

  const checkWinner = () => {
    for (let i = 0; i < 9; i++) {
      if (i % 3 === 0) {
        if (
          values[i] === running &&
          values[i + 1] === running &&
          values[i + 2] === running
        ) {
          setWinner(true);
          setGameOver("Gamer Over");
          setValues(["", "", "", "", "", "", "", "", ""]);
          return true;
        }
      }
      if (
        values[i] === running &&
        values[i + 3] === running &&
        values[i + 6] === running &&
        i < 3
      ) {
        setWinner(true);
        setGameOver("Gamer Over");
        setValues(["", "", "", "", "", "", "", "", ""]);
        return true;
      }
      if (
        values[0] === running &&
        values[4] === running &&
        values[8] === running
      ) {
        setWinner(true);
        setGameOver("Gamer Over");
        setValues(["", "", "", "", "", "", "", "", ""]);
        return true;
      }
      if (
        values[2] === running &&
        values[4] === running &&
        values[6] === running
      ) {
        setWinner(true);
        setGameOver("Gamer Over");
        setValues(["", "", "", "", "", "", "", "", ""]);
        return true;
      }
    }
    setWinner(false);
    return false;
  };


  const updateCounter = () => {
    setCounter(counter + 1);
    if (counter === 8) {
      setGameOver("Gamer Over");
      setValues(["", "", "", "", "", "", "", "", ""]);
      setCounter(0);
    }
  };

  const writeValue = (i) => {
    let newArray = [...values];
    counter % 2 === 0 ? (newArray[i] = "X") : (newArray[i] = "0");
    setValues(newArray);
    setRunning(newArray[i]);
   
  };

  useEffect(()=>{
    checkWinner();
  },[counter]);

  let x = 0;
  return (
    <div className="div">
      <div>
        <Player
          key={counter % 2}
          value={winner? (counter % 2) -1 : counter % 2}
          winner={winner}
          gameOver={gameOver}
        />
        {values.map((i) => {
          return (
            <Square
              key={x++}
              writeValue={writeValue}
              id={x}
              value={i}
              updateCounter={updateCounter}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
