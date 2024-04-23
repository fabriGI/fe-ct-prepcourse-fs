function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  if (typeof booleano1 === 'boolean' && typeof booleano2 === 'boolean'){
    return booleano1 && booleano2;
  }
}

module.exports = esVerdaderoYFalso;
