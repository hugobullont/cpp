import React from 'react';

import Card from './Card';
import LoadingBox from './shared/LoadingBox';

import {getWhiteCards} from '../networking/WhiteCardsNetworking';

export default class NoCPPPlayer extends React.Component {

    state = {
        whiteCards: [],
        selectedCard: 0,
        loading: false,
        loadingMessage: '',
    }
    
    componentDidMount = () => {
        this.setState({loadingMessage: 'Barajando Cartas...', loading: true});
        getWhiteCards().then((value)=>{
            this.setState({loading: false});
            this.setState({whiteCards: value, loadingMessage: ''});
        })
    }

    onClickCard = (event) => {
        console.log(event.target.id);
        if(this.state.selectedCard === 0){
            this.setState({selectedCard: event.target.id});
        }
    }
    
    render() {
        let cards = [];
        this.state.whiteCards.forEach(element => {
            let type = "";
            
            if(element.id === parseInt(this.state.selectedCard)){
                type="green";
            }
            cards.push(<Card key={'card'+ element.id} cardId={element.id} content={element.content} onClick={this.onClickCard} type={type}/>);
        });

        return (
            <div className="noctm-visual-fix">
                <span className="game-title titles">Hora de Jugar</span>
                <span className="game-description titles">Escucha al jugador <strong>CPP</strong> y dale click a tu mejor carta.</span>
                <div className="App-header">
                    {cards}
                </div>
                <LoadingBox loading={this.state.loading} message={this.state.loadingMessage}/>
            </div>
        );
    }


}