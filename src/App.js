import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Player from './components/Player/Player';

const players = [{
    name: "Devin",
    id: 1
  },
  {
    name: "Lauren",
    id: 2
  },
  {
    name: "Poly",
    id: 3
  },
  {
    name: "James",
    id: 4
  }
]


class App extends Component {

state = {
  players: players
}

handleRemovePlayer = (id) => {
  this.setState( prevState => {
    return {
      players: prevState.players.filter( p => p.id !== id )
    }
  })
}

  render() {
    return (
     <div className="scoreboard">
      <Header 
       title="Scoreboard" 
       totalPlayers={this.state.players.length}
       />
    
    
    {/* Players List*/}
    {this.state.players.map( player =>
      <Player 
        name={player.name} 
        id={player.id}
        key={player.id.toString()}
        removePlayer={this.handleRemovePlayer}

       />
      
    )}
    </div>
    );
  }
}

export default App;
