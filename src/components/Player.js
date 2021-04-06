import React from "react";
import "./css/player.css";

const Player = (props) => {
  return (
    <div>
      <p>{props.gameOver}</p>
      <p>Winner is Player {props.winner ? props.value : ""}</p>
      <p>Player {props.value}'s Turn</p>
    </div>
  );
};

export default Player;
