import React from "react";
import "../styles/scorekeeper.css";
function ScoreKeeper(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
                <h1 className="display-4">{props.children}</h1>
                <p className="lead">{props.high}</p>
  </div>
</div>
    )
}

export default ScoreKeeper;