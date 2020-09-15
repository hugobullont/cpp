import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

export default class LoadingBox extends React.Component {
    onClose = () => {

    }

    render(){
        return(
            <Dialog 
                open        = {this.props.open} 
                onClose     = {this.props.onClose} 
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title"><strong>¿Cómo Jugar?</strong></DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Typography>
                            CPP es nuestra "reimaginación perucha/online" del famoso juego de cartas "Cards Against Humanity".
                            Tal vez ya has jugado alguna versión de este juego en su versión de mesa.
                        </Typography>
                        <br/>
                        <Typography>
                            <strong>
                                ¿Cómo creo una partida?
                            </strong>
                        </Typography>
                        <Typography>
                            Un rico click a Crear Nuevo Juego. Ingresas tu nombre, tu nick o tu nombre de batalla (Aquí no discriminamos).
                            Esperas un ratito y estarás en un lobby con el Código de Sala listo para que lo compartas con tus amigos.
                        </Typography>
                        <br/>
                        <Typography>
                            <strong>
                                ¿Cómo me uno a una partida?
                            </strong>
                        </Typography>
                        <Typography>
                            Un click a Unirse a un Juego. Ingresas tu nombre y el Código de Sala que el desesperado de tu causa te debe haber hecho llegar por 50 servicios de mensajería distintos.
                            Esperas un ratito y estarás en un lobby con el Código de Sala listo para que lo compartas con tus amigos. Debes esperar que tu amiwis inicie el juego.
                        </Typography>
                        <br/>
                        <Typography>
                            <strong>
                                ¿Y cómo se juega esta huevada?
                            </strong>
                        </Typography>
                        <Typography>
                            Aleatoriamente escogeremos el orden de los jugadores (pero casi siempre, el más pajero es el primero) (Gracias a nuestro equipo de AI por tan importante avance).
                            El <strike>pajero</strike> primero recibirá una carta negra con una oración incompleta y lo llamaremos Jugador CPP. Los demás recibirán 10 cartas blancas con frases y/o palabras.
                            El CPP debe leer su carta en voz alta para que los demás escojan su mejor carta, la que saben que hará que el jugador CPP muera de la risa.
                            El CPP recibirá las cartas blancas sin saber quién es el dueño. Leerá todas las combinaciones para que todos mueran de la risa (o la vergüenza) y escogerá la mejor.
                            El dueño de la carta blanca ganará la ronda. 
                            El primero en llegar a 5 rondas será coronado como el más pendejo del grupo.
                        </Typography>
                        <br/>
                        <br/>
                        <Typography>
                            Hecho con ¿Amor? en los laboratorios de <strong>reactivatech</strong> en Perú
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose} color="primary">
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}