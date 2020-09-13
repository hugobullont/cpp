import React from 'react';

export default class JoinGame extends React.Component {
    state = {
        userName: '',
        gameCode: '',
    }

    onChangeUserName = (event) => {
        this.setState({userName: event.target.value});
    }

    onChangeGameCode = (event) => {
        this.setState({gameCode: event.target.value});
    }

    render = () => {
        return(
            <div className="noctm-visual-fix">
                <div>
                    <span className="login-game-title">CPP</span>
                    <span className="login-game-description">Cantemos Poemas Problemáticos</span>
                    <div className="login-form">
                        <span className="login-label">Ingresa tu Nombre</span>
                        <input className="login-input" type="text" placeholder="Nickname..." value={this.state.userName} onChange={this.onChangeUserName}></input>
                        <span className="login-label">Ingresa el Código de Sala</span>
                        <input className="login-input-code" type="text" placeholder="Code..." value={this.state.gameCode} onChange={this.onChangeGameCode}></input>
                        <div className="login-buttons-container">
                            <button className="login-button">Unirse al Juego</button>
                        </div>
                        <button className="login-button" onClick={this.props.onBackClick}>Atrás</button>
                    </div>
                </div>
            </div>
        );
    }
}