/**
 * Esta funcion devuelve un string que corresponde a una carta y la elimina del mazo.
 * @param {Array<string>} deck 
 * @returns Retorna una carta (carta).
 */

export const pedirCarta = (deck) => {
    if(deck.length === 0) {
        throw 'No hay cartas en el mazo';
    }
    return deck.pop();
}