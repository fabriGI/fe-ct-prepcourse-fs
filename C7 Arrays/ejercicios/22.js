function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var resultado = []
  let i = 0
  while (i <= 10) {
    resultado.push(i*6)
    i++
  }return resultado
}

module.exports = tablaDelSeis;
