function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var nuevoArray = numeros.filter(num =>  num % 2 === 0)
  return nuevoArray.length
}

module.exports = contarParesConContinue;
