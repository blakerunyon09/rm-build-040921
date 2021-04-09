import React, { Component } from 'react';
import CharacterList from './CharacterList'
import Favorites from './Favorites'
import './App.css';

class App extends Component {

  state = {
    characters: [],
    favorites: []
  }

  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character/?page=2')
    .then(res => res.json())
    .then(({results}) => this.setState({
      characters: results
    }))
  }

  addFavorite = (character) => {
    const found = this.state.favorites.find(char => char === character)
    if(!found){
      this.setState({ favorites: [...this.state.favorites, character] })
    }
  }
  
  render(){
    return (
      <div className="App">
        <Favorites favorites={this.state.favorites} />
        <CharacterList characters={this.state.characters} addFavorite={this.addFavorite} />
      </div>
    );
  }
}

export default App;
