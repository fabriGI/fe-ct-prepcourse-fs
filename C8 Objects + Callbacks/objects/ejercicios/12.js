function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  for (const propiedad in objetoMisterioso) {
   if(objetoMisterioso[propiedad]) return objetoMisterioso[propiedad] * 5
  }
}

module.exports = multiplicarNumeroDesconocidoPorCinco;
