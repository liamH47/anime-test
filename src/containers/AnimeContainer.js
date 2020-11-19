import React from 'react';
import characterArray from '../api'



class AnimeContainer extends React.Component {

    characterMap = () => this.props.characterArray.map(charObj => console.log(charObj))

    render() {
        return (
           <div>
               <h1>Index</h1>
               {console.log(characterArray)}
               {console.log(this.props)}
           </div>
        )
    }

}


export default AnimeContainer