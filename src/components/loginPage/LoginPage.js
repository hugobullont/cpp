import React from 'react';
import CreateGame from '../createGame/CreateGame';
import JoinGame from '../joinGame/JoinGame';

export default class LoginPage extends React.Component {
    state = {
        currentScreen: 'Login',
    }

    onJoinClick = () => {
        this.setState({currentScreen: 'Join'});
    }

    onCreateClick = () => {
        this.setState({currentScreen: 'Create'});
    }

    render = () => {
        
        switch (this.state.currentScreen) {
            case 'Login':
                return(
                    <div className="noctm-visual-fix">
                        <span className="login-game-title">CPP</span>
                        <span className="login-game-description">Cantemos Poemas Problemáticos</span>
                        <div className="login-form">
                            <button className="login-button" onClick={this.onJoinClick}>Unirse a un Juego</button>
                            <button className="login-button" onClick={this.onCreateClick}>Crear Nuevo Juego</button>
                        </div>
                    </div>
                );
            case 'Create':
                return(
                    <CreateGame/>
                );  
            case 'Join':
                return(
                    <JoinGame/>
                );      
            default:
                return(
                    <div className="noctm-visual-fix">
                        <span className="login-game-title">CPP</span>
                        <span className="login-game-description">Cantemos Poemas Problemáticos</span>
                        <div className="login-form">
                            <button className="login-button" onClick={this.onJoinClick}>Unirse a un Juego</button>
                            <button className="login-button" onClick={this.onCreateClick}>Crear Nuevo Juego</button>
                        </div>
                    </div>
                );
        }
        
    }
}