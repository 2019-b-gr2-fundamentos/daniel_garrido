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
function someNuevo(arreglo, funcion) {
    for (var j = 0; j < arreglo.length; j++) {
        var respuestaFuncion = funcion(arreglo[j], j, arreglo);
        if (respuestaFuncion == true) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.someNuevo = someNuevo;
