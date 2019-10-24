import React from "react";
import "../styles/navbar.css";
function Navbar(props) {
    return (
       
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="*">
                <img src="http://assets.stickpng.com/thumbs/5b4a216ec051e602a568cd7e.png" width="50" height="50" className="d-inline-block align-top" alt="" />
                {props.children}
            </a>
        </nav>
         
    );
}

export default Navbar