import React from 'react';

export default class Card extends React.Component {

    
    render() {
        if(this.props.type === "green") {
            return (
                <div id={this.props.cardId} className='green-card' onClick={this.props.onClick}>
                    <p id={this.props.cardId} className='card-text'>{this.props.content}</p>
                </div>
            );
        }

        return (
            <div id={this.props.cardId} className='white-card' onClick={this.props.onClick}>
                <p id={this.props.cardId} className='card-text'>{this.props.content}</p>
            </div>
        )
    }
    
}
