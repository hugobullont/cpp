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
            console.log(value);
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
            
            if(element.CardID === parseInt(this.state.selectedCard)){
                type="green";
            }
            cards.push(<Card key={'card'+ element.CardID} cardId={element.CardID} content={element.Text} onClick={this.onClickCard} type={type}/>);
        });

        return (
            <div className="noctm-visual-fix">
                <div>
                    <span className="game-title titles">No eres un CPP <strike className="strike-title">¿o sí?</strike></span>
                    <span className="game-description titles">Escucha al jugador <strong>CPP</strong> y dale click a tu mejor carta.</span>
                    <div className="App-header">
                        {cards}
                    </div>
                </div>
                <LoadingBox loading={this.state.loading} message={this.state.loadingMessage}/>
            </div>
        );
    }


}