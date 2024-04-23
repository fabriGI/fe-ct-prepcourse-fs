const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let sumaPropiedades = 0
  for (const propiedades in objeto) {
          sumaPropiedades ++
    }return sumaPropiedades
  
};

module.exports = contarPropiedades;
