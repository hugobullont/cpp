import React from 'react';

export default class LobbyCard extends React.Component {

    render = () => {
        return(
            <div className="lobby-card">
                <p className="lobby-card-text">{this.props.description}</p>
            </div>
        )
    }
}