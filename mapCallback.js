function miMap(lista, funcion) {
  const nuevoArray = [...lista];
  for (var i = 0; i < lista.length;i++) {
    elemento = nuevoArray[i];
    nuevoArray[i] = funcion(elemento);
  }
  return nuevoArray;
}




function porDos(nro) {
  return nro * 2
}

// Probando miMap
arrayViejo = [1, 2, 3, 4, 5]
var arrayNuevo = miMap(arrayViejo, porDos)
console.log(arrayNuevo) // arrayNuevo = [2,4,6,8,10] 
