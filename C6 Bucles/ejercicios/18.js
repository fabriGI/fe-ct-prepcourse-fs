function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var resultado = 1 ;
  if ( a < 0 ){
    return 0;
  }
  for (i = a ; i <= b ; i++){
    resultado *= i;
  }return resultado;
}

module.exports = productoEntreNúmeros;