import React from "react";
import "../styles/mainbox.css";

function MainBox(props) {
    return (
            <div className="jumbotron" id="mainbox">
            {props.children}
            </div>
            );
        } 
        
        
export default MainBox
