import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Player from './components/Player/Player';

const players = [{
    name: "Devin",
    score: 50,
    id: 1
  },
  {
    name: "Lauren",
    score: 85,
    id: 2
  },
  {
    name: "Poly",
    score: 95,
    id: 3
  },
  {
    name: "James",
    score: 80,
    id: 4
  }
]


class App extends Component {
  render() {
    return (
     <div className="scoreboard">
      <Header 
       title="Scoreboard" 
       totalPlayers={players.length}
       />
    
    
    {/* Players List*/}
    {players.map( player =>
      <Player 
        name={player.name} 
        key={player.id.toString()}
       />
      
    )}
    </div>
    );
  }
}

export default App;
