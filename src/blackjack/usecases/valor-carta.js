/**
 * Esta funcion devuelve el valor numerico de una carta.
 * @param {String} carta 
 * @returns Devuelve el valor numerico de la carta.
 */

export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (!isNaN(valor)) ? valor * 1:
            (valor === 'A') ? 11 : 10;
}