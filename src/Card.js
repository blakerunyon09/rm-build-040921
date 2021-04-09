import React from 'react'

export default function Card({ character, addFavorite }){

    const handleClick = (event) => {
      if(addFavorite){
        addFavorite(character)
      }
    }

    const removeFavorite = (character) => {
      const favorites = this.state.favorite.filter(favorite => favorite !== character)
      this.setState({
        favorites
      })
    }

    return (
        <li onClick={handleClick}>
          <h2>{character.name}</h2>
          <img src={character.image} alt="character-image"/>
        </li>
    )
}