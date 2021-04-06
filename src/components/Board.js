import React, { useState } from "react";
import Square from "./Square";
import Player from "./Player";
import "./css/board.css";

let winner;

const Board = () => {
  const [values, setValues] = useState(["", "", "", "", "", "", "", "", ""]);

  const [running, setRunning] = useState("-");

  const [gameOver, setGameOver] = useState("");

  const checkWinner = () => {
    for (let i = 0; i < 9; i++) {
      if (i % 3 === 0) {
        if (
          values[i] === running &&
          values[i + 1] === running &&
          values[i + 2] === running
        ) {
          winner = true;
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
        winner = true;
        setGameOver("Gamer Over");
        setValues(["", "", "", "", "", "", "", "", ""]);
        return true;
      }
      if (
        values[0] === running &&
        values[4] === running &&
        values[8] === running
      ) {
        winner = true;
        setGameOver("Gamer Over");
        setValues(["", "", "", "", "", "", "", "", ""]);
        return true;
      }
      if (
        values[2] === running &&
        values[4] === running &&
        values[6] === running
      ) {
        winner = true;
        setGameOver("Gamer Over");
        setValues(["", "", "", "", "", "", "", "", ""]);
        return true;
      }
    }
    winner = false;
    return false;
  };

  let [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter(counter + 1);
    if (counter === 8) {
      setGameOver("Gamer Over");
      setValues(["", "", "", "", "", "", "", "", ""]);
    }
  };

  const writeValue = (i) => {
    let newArray = [...values];
    counter % 2 === 0 ? (newArray[i] = "X") : (newArray[i] = "0");
    setValues(newArray);
    setRunning(newArray[i]);
    checkWinner();
  };

  let x = 0;
  return (
    <div className="div">
      <div>
        <Player
          key={counter % 2}
          value={counter % 2}
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
