import React from 'react'
import Stats from '../Stats/Stats';
import Stopwatch from '../Stopwatch/Stopwatch';



 const Header = ({players, title}) => {

  return (
    <header>
      <Stats players={players}/>
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
}

export default Header;