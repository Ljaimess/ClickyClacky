import React from "react";
import "../styles/charactercard.css";

function Ccard(props) {
    return (
        <div className="card"
            style={{ backgroundImage: `url("${props.image}")`}}
            onClick={() => props.handleClick(props.id)}
        />
    );
};

export default Ccard;