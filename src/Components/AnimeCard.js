import React, from 'react';

class AnimeCard extends React.Component {

    render() {
        return(
            <div>
            <h2>
                {this.props.charObj.name}
            </h2>
            <img src={this.props.img} alt={this.props.charObj.name} />
            </div>
        )
    }
}

export default AnimeCard