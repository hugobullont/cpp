import React from 'react';

export default class CreateGame extends React.Component {
    state = {
        userName: '',
    }

    onChangeUserName = (event) => {
        this.setState({userName: event.target.value});
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
                        <div className="login-buttons-container">
                            <button className="login-button">Crear Nuevo Juego</button> 
                        </div>
                        <button className="login-button" onClick={this.props.onBackClick}>Atrás</button>
                    </div>
                </div>
            </div>
        );
    }
}