import React from 'react';
import characterArray from '../api'
import AnimeCard from '../Components/AnimeCard'



class AnimeContainer extends React.Component {

    state = {
        characters: characterArray
    }


    render() {
        let allAnimeCards = characterArray.map(charObj => <AnimeCard charObj={charObj} />)
        return (
           <div>
               <h1>Anime Characters</h1>
               {allAnimeCards}
           </div>
        )
    }

}
//must pass props of character object to animecard and then map the character array so that 
//we get a card for each anime character

export default AnimeContainer