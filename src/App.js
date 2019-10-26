import React, { Component } from 'react';
import Navbar from "./components/navbar";
import ScoreKeeper from "./components/scorekeeper";
import Mainbox from "./components/mainbox";
import Ccard from "./components/charatercard";
import peeps from "./peeps.json";



class App extends Component {

  state = {
    peeps,
    score: 0,
    highScore: 0,

  };

  componentDidMount() {
    this.setState({ peeps: this.shuffleUp(this.state.peeps) });
  }

  cardClick = id => {
    let goodGuess = false;
    const newStuff = this.state.peeps.map(pic => {
      if (pic.id === id) {
        if (!pic.clicked) {
          pic.clicked = true;
          goodGuess = true;
        }
      }
      return pic;
    });
    goodGuess ? this.correctG(newStuff) : this.wrongG(newStuff);
  };
  
  shuffleUp = peeps => {
    let newShuffle = peeps.sort(function (a, b) { return 0.5 - Math.random() });
    return newShuffle
  };

  correctG = newStuff => {
    let newScore = this.state.score;
    newScore++
    let newHigh = Math.max(newScore, this.state.highScore);

    this.setState({
      peeps: this.shuffleUp(newStuff),
      score: newScore,
      highScore: newHigh,
    })
  };

  wrongG = newStuff => {
    this.setState({
      peeps: this.newGame(newStuff),
      score: 0
    })
  };

  newGame = peeps => {
    const restart = peeps.map(pic => ({ ...pic, clicked: false }));

    return this.shuffleUp(restart);
  };

  render() {
    return (
      <div>
  
        <Navbar>Animal Crossing</Navbar>
        <ScoreKeeper>
          <div className="score">
            <p>Score={this.state.score} <br></br>
              High Score={this.state.highScore}
            </p>
          </div>
        </ScoreKeeper>
        <Mainbox>
          {
            this.state.peeps.map(pic => (
              <Ccard
              key={pic.id}
              id={pic.id}
              image={pic.image}
              name={pic.name}
              clicked={pic.clicked}
              handleClick={this.cardClick}  
              /> 
            ))
          }
        </Mainbox>
      </div>
    );
  }
}

export default App;

