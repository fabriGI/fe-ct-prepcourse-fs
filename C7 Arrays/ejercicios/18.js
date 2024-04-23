function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var sumarNotas = 0 
  var cantidadDeNotas = 0
  for(let i = 0 ; i < resultadosTest.length ; i++){    
    sumarNotas += resultadosTest[i]
    cantidadDeNotas ++
  }var promedio = sumarNotas / cantidadDeNotas
  return promedio
}

module.exports = promedioResultadosTest;
