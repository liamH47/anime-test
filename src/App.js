import React from 'react';
import './App.css';
import characterArray from './api'
import AnimeContainer from './containers/AnimeContainer';

class App extends React.Component {

  state = {characterArray}

  render() {
    return (
    <div>

      <AnimeContainer characterArray={this.state.characterArray}/>
      {console.log(characterArray)}
    </div>

    )
  }
}

export default App;
