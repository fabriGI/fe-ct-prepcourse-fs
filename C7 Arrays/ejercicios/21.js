// El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
// "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
// Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
// Tu código:
function mesesDelAño(array) {
  var mesesRequeridos = ['Enero', 'Marzo','Noviembre']
  var devolucionDeMeses = array.filter(mes => mesesRequeridos.includes(mes))
  return devolucionDeMeses.length === 3 ? devolucionDeMeses : 'No se encontraron los meses pedidos'

}

module.exports = mesesDelAño;

