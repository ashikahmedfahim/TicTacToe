import React from "react";
import "./css/player.css";

const Player = (props) => {
  return (
    <div>
      <p>{props.gameOver}</p>
      {props.winner ? <p>Winner is Player {props.winner ? props.value : ""}</p> : "" }
      {props.gameOver? "" : <p>Player {props.value}'s Turn</p>}
    </div>
  );
};

export default Player;
