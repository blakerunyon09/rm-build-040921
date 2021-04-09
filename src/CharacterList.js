import React from 'react'
import Card from './Card'

export default function CharacterList({ characters, addFavorite }){

    const displayCharacters = () => characters.map(character => {
        console.log(character)
        return <Card key={character.id} addFavorite={addFavorite} character={character} />
    })

    return (
        <ul className="character-list">
            {displayCharacters()}
        </ul>
    )
}