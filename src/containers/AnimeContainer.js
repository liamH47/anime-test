import React from 'react';
import characterArray from '../api'
import AnimeCard from '../Components/AnimeCard'
import Form from '../Components/NewCharForm'



class AnimeContainer extends React.Component {

    state = {
        characters: characterArray
    }

    submitHandler = (charObj) => {
        this.setState({ characters: [...this.state.characters, charObj] });
        console.log(charObj)
    };


    render() {
        let allAnimeCards = this.state.characters.map(charObj => <AnimeCard key={charObj.id} charObj={charObj} />)
        return (
           <div>
               <Form submitHandler={this.submitHandler}/>
               <h1>Anime Characters</h1>
               {allAnimeCards}
           </div>
        )
    }

}
//must pass props of character object to animecard and then map the character array so that 
//we get a card for each anime character

export default AnimeContainer