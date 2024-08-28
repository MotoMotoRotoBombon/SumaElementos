function sumarElementos(arreglo) {
    return arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

console.log(sumarElementos([1, 2, 3, 4, 5])); // Muestra: 15

    