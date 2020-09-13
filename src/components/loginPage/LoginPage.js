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

    onBackClick = () => {
        this.setState({currentScreen: 'Login'});
    }

    render = () => {
        
        switch (this.state.currentScreen) {
            case 'Login':
                return(
                    <div className="noctm-visual-fix">
                        <div>
                            <span className="login-game-title">CPP</span>
                            <span className="login-game-description">Cantemos Poemas Problemáticos</span>
                            <div className="login-form">
                                <button className="login-button" onClick={this.onJoinClick}>Unirse a un Juego</button>
                                <button className="login-button" onClick={this.onCreateClick}>Crear Nuevo Juego</button>
                            </div>
                        </div>
                    </div>
                );
            case 'Create':
                return(
                    <CreateGame onBackClick={this.onBackClick}/>
                );  
            case 'Join':
                return(
                    <JoinGame onBackClick={this.onBackClick}/>
                );      
            default:
                return(
                    <div className="noctm-visual-fix">
                        <div>
                            <span className="login-game-title">CPP</span>
                            <span className="login-game-description">Cantemos Poemas Problemáticos</span>
                            <div className="login-form">
                                <button className="login-button" onClick={this.onJoinClick}>Unirse a un Juego</button>
                                <button className="login-button" onClick={this.onCreateClick}>Crear Nuevo Juego</button>
                            </div>
                        </div>
                    </div>
                );
        }
        
    }
}