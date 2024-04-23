function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }
  const min = Math.min(...numeros);
  const max = Math.max(...numeros);
  const sumaTotalEsperada = ((min + max) * (max - min + 1)) / 2;
  let sumaActual = 0;
  for (let num of numeros) {
    sumaActual += num;
  }
  const numeroFaltante = sumaTotalEsperada - sumaActual;
  return numeroFaltante !== 0 ? numeroFaltante : null;
}

module.exports = encontrarNumeroFaltante;