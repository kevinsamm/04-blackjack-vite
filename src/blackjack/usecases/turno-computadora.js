import { insertarCarta } from "./insertar-carta";

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck 
 * @param {Array<Number>} puntosJugadores 
 */

export const turnoComputadora = (puntosMinimos, deck, puntosJugadores) => {
    do {
        insertarCarta(1, deck, puntosJugadores);
    } while (puntosJugadores[1] < puntosMinimos && puntosMinimos <= 21);
    
    setTimeout(() => {
        if (puntosJugadores[0] === puntosJugadores[1]) {
            alert('Nadie gana');
        } else if ((puntosMinimos > 21 || puntosJugadores[1] > puntosJugadores[0]) && puntosJugadores[1] <= 21) {
            alert('La computadora gana');
        } else if (puntosJugadores[1] > 21) {
            alert('El jugador 1 gana');
        }
    }, 100);
}