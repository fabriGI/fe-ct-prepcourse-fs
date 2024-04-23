function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var resultado = num ;
  var i = 0 ;
  do {
    i < num;
    resultado += 5;
    i++;
  } while (i < 8);
  return resultado;
}

module.exports = doWhile;