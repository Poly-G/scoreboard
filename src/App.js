import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Player from './components/Player/Player';
import AddPlayerForm from './components/AddPlayerForm/AddPlayerForm';

const players = [
  {
    name: 'Devin',
    id: 1,
    score: 0
  },
  {
    name: 'Juliana',
    id: 2,
    score: 0
  },
  {
    name: 'Poly',
    id: 3,
    score: 0
  },
  {
    name: 'James',
    id: 4,
    score: 0
  }
];

class App extends Component {
  state = {
    players: players
  };

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score += delta)
    }));
  };

  handleAddPlayer = name => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: Date.now()
          }
        ]
      };
    });
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={this.state.players} />

        {/* Players List*/}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
            score={player.score}
            changeScore={this.handleScoreChange}
            index={index}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
