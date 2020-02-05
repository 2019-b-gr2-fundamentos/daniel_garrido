function everyNuevo(arreglo, funcion) {
    for (var j = 0; j < arreglo.length; j++) {
        var respuestaFuncion = funcion(arreglo[j], j, arreglo);
        if (respuestaFuncion == false) {
            return false;
        }
        else {
            return true;
        }
    }
}
exports.everyNuevo = everyNuevo;
