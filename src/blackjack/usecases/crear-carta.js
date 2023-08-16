/**
 * Crear un elemento HTML para la carta.
 * @param {String} carta 
 */
export const crearCartaHtml = (carta) => {
    const imagenCarta = document.createElement('img');
    imagenCarta.src = `assets/cartas/${carta}.png`;
    imagenCarta.classList.add('carta');
    return imagenCarta;
}