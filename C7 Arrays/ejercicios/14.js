function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var sumarArray = 0
  for (let i = 0 ; i < array.length ; i++){
    if(array[i]>10)  sumarArray++
  }return sumarArray
}

module.exports = contarElementosMayoresA10;
