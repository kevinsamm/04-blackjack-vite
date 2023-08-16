import { crearDeck } from "./usecases/crear-deck";
import { insertarCarta } from "./usecases/insertar-carta";
import { turnoComputadora } from "./usecases/turno-computadora";

const btnPedir = document.querySelector('#btnPedir');
const btnNuevo = document.querySelector('#btnNuevo');
const btnDetener = document.querySelector('#btnDetener');
const divCartas = document.querySelectorAll('.cartas');
const puntajesHtml = document.querySelectorAll('small');

const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
let deck = [];
let puntosJugadores = [0, 0];

const inicializarJuego = () => {
    deck = [];
    deck = crearDeck(tipos, especiales);
    puntosJugadores[0] = 0; 
    puntosJugadores[1] = 0; 
    divCartas[0].innerHTML = '';
    divCartas[1].innerHTML = '';
    puntajesHtml[0].innerText = 0;
    puntajesHtml[1].innerText = 0;
    btnPedir.disabled = false;
    btnDetener.disabled = false;
}

btnPedir.addEventListener('click', () => {
    insertarCarta(0, deck, puntosJugadores);

    if (puntosJugadores[0] >= 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0], deck, puntosJugadores);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], deck, puntosJugadores );
});

btnNuevo.addEventListener('click', () => {
    inicializarJuego();        
});