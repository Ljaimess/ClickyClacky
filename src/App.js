import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import ScoreKeeper from "./components/scorekeeper";
import Mainbox from "./components/mainbox";

let score = "2"
let high = "1"

function App() {
  return (
    <div>
      
      <Navbar>Animal Crossing</Navbar>
      <ScoreKeeper>
        <div className="score">Your score = {score}</div>
        <div className="high">High score = {high}</div>
      </ScoreKeeper>
      <Mainbox/>
    </div>
  );
}

export default App;

