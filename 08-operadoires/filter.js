function calcular(funcion, numUno, numDos) {
    return funcion(numUno, numDos);
}
exports.calcular = calcular;
function sumar(numUno, numDos) {
    return numUno + numDos;
}
exports.sumar = sumar;
function resta(numUno, numDos) {
    return numUno - numDos;
}
exports.resta = resta;
//Estos dos son exactamente lo mismo
calcular(sumar, 5, 3); //8
calcular(function (numUno, numDos) {
    return numDos + numUno;
}, 3, 1); //8
//Asi se le dice al Ts que recibe una fucnion y suelta un boolean
//   d 
function filter(arreglo, funcion) {
    //de aqui a abajo esta el programa
    var arregloFiltrado = [];
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
        if (respuestaFuncion == true) {
            arregloFiltrado.push(arreglo[i]);
        }
    }
    return arregloFiltrado;
}
exports.filter = filter;
function map(arreglo, funcionRecibida) {
    //codigo
    var arregloModificado = [];
    for (var i = 0; i <= arreglo.length; i++) {
        var respuestaFuncion = funcionRecibida(arreglo[i], i, arreglo);
        if (respuestaFuncion[i] == arreglo[i]) {
            arregloModificado[i] == arreglo[i];
        }
        else {
            arregloModificado[i + 1] == respuestaFuncion;
        }
    }
    return arregloModificado;
}
exports.map = map;
