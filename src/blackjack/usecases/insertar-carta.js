import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
import { crearCartaHtml } from "./crear-carta";

/**
 * Esta funcion inserta una carta en la pagina de acuerdo al turno del jugador.
 * @param {Number} jugador 0 => jugador 1, 1 => computadora.
 * @param {Array<string>} deck 
 * @param {Array<number>} puntosJugadores
 */

const puntajesHtml = document.querySelectorAll('small');
const divCartas = document.querySelectorAll('.cartas');

export const insertarCarta = (jugador, deck, puntosJugadores) => {
    const carta = pedirCarta(deck);
    puntosJugadores[jugador] = puntosJugadores[jugador] + valorCarta(carta);

    const imagenCarta = crearCartaHtml(carta);

    puntajesHtml[jugador].innerText = puntosJugadores[jugador];
    divCartas[jugador].append(imagenCarta);
}