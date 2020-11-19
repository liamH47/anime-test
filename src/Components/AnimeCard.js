import React from 'react';

class AnimeCard extends React.Component {

    render() {
        const charObj = this.props.charObj
        return(
            <div>
            <h2>
                {charObj.name}
            </h2>
            <img src={charObj.img} alt={charObj.name} />
            </div>
        )
    }
}

export default AnimeCard