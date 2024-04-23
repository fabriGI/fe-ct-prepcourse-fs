function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length === 0)return 0
  var numeroMasGrande = array[0]
  for(let i = 0 ; i < array.length ; i++){
    if (array[i] > numeroMasGrande) {
      numeroMasGrande = array[i]
      }
  }return array.indexOf(numeroMasGrande)
}

module.exports = encontrarIndiceMayor;
