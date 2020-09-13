import React from 'react';
import LobbyCard from './LobbyCard';

export default class Lobby extends React.Component {
    render = () => {
        return(
            <div className="noctm-visual-fix">
                <div>
                    <span className="login-game-title">CPP</span>
                    <span className="login-game-description">Cantemos Poemas Problemáticos</span>
                    <div className="login-form">
                        <span className="login-label">Código de Sala</span>
                        <span className="code-label">69XD</span>
                        <span className="login-label">Jugadores</span>
                        <div className="lobby-card-container">
                            <LobbyCard description="name"/>
                        </div>
                        <div className="login-buttons-container">
                            <button className="login-button">Iniciar Juego</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}