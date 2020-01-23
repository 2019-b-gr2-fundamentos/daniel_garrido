/*
Obtener la primera dimension y la segunda dimension , ademas ver que todos los arreglos
dentro del arregllo son iguales


*/
function compararMatriz(matrizUno, matrizDos) {
    var eFectivamente = TienenMAtricesIGualDIm(matrizUno, matrizDos);
    if (eFectivamente) {
        return true;
    }
    else {
        return false;
    }
}
function TienenMAtricesIGualDIm(matrizUno, matrizDos) {
    var matrizUnoPrimeraDimension = obtenerPrimeraDimension(matrizUno);
    var matrizUnoSegundaDimension = obtenerSegundaDimension(matrizUno);
    var matrizDosPrimeraDimension = obtenerPrimeraDimension(matrizDos);
    var matrizDosSegundaDimension = obtenerSegundaDimension(matrizDos);
    var noHayfalsos = matrizUnoPrimeraDimension != false && matrizUnoSegundaDimension != false && matrizDosSegundaDimension != false &&
        matrizDosPrimeraDimension != false;
    var sonMismaDim = matrizDosPrimeraDimension == matrizUnoPrimeraDimension && matrizDosSegundaDimension == matrizUnoSegundaDimension;
    if (noHayfalsos) {
        if (sonMismaDim) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
function obtenerPrimeraDimension(matrizUno) {
    // VALIDACIONES
    var esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if (esValido) {
        var primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo;
    }
    else {
        return false;
    }
}
function obtenerSegundaDimension(matrizUno) {
    var esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if (esValido == true) {
        var longitudActualMaxima = 0; // Auxiliar
        var longitudActualMinima = -1; // Auxiliar
        for (var i = 0; i < matrizUno.length; i++) {
            var elementoActual = matrizUno[i]; // arreglo
            var longitudActual = elementoActual.length; // segunda dimension
            if (longitudActualMaxima < longitudActual) {
                longitudActualMaxima = longitudActual;
            }
            if (longitudActualMinima == -1) {
                longitudActualMinima = longitudActual;
            }
            else {
                if (longitudActual < longitudActualMinima) {
                    longitudActualMinima = longitudActual;
                }
            }
        }
        if (longitudActualMaxima != longitudActualMinima) {
            return false;
        }
        else {
            return matrizUno[0].length;
        }
    }
    else {
        return false;
    }
}
function verificarTodosLosElementosDeUnArregloSonArreglo(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        var elementoActual = arreglo[i];
        var esUnArreglo = typeof elementoActual == 'object' &&
            elementoActual.indexOf; // Truty
        if (!esUnArreglo) {
            return false;
        }
    }
    return true;
}
function main() {
    var x = [
        [1, 2, 1],
        [3, 2, 0],
        [3, 1, 0]
    ];
    var y = [
        [1, 2, 1],
        [3, 2, 0],
        [3, 1, 0]
    ];
    console.log(x);
}
main();
/* Debaugers herramient apara ayudar a encontrar los errores en el putanal de codigo
fecha 18/12 hay dos informes, en el primero tienes que hacer la funcion
obtenerPrimeraDimension
obtenerSegundaDimension
verificarTodosLosElementosDeUnArregloSonArreglo

En el segundo vamos a ver los debugers
Los puntos de quiebe son los puntos rojos que podmeos poner a la izquierda del numero de linea,
esotos puntos le dicen al debugeador


BUSCAR EL DEBUGER PARA PHP
*/
function igualdad(matriz1, matriz2) {
    var doble = compararMatriz(matriz1, matriz2);
    if (doble == true) {
        var long1 = matriz1.length;
        var long2 = matriz2.length;
        var long1_2 = matriz1[0].length;
        var long2_2 = matriz2[0].length;
        var valor3 = long1 * long1_2;
        var valor = 0;
        if (long1 == long2 && long1_2 == long2_2) {
            for (var i = 0; i < long1; i++) {
                for (var j = 0; j < long1_2; j++) {
                    if (matriz1[i][j] == matriz2[i][j]) {
                        valor = valor + 1;
                    }
                    else {
                        console.log(matriz1[i][j] + " no es igual a " + matriz2[i][j]);
                    }
                }
            }
            if (valor == valor3) {
                console.log("efectivamente son iguales");
            }
        }
        else {
            console.log("hablas piedras ni cagando son iguales");
        }
    }
    else {
        console.log("hablas piedras ni cagando son iguales");
    }
}
function suma(matriz3) {
    var long3 = matriz3.length;
    var long3_1 = matriz3[0].length;
    for (var p = 0; p < long3; p++) {
        var valorf2 = 0;
        for (var m = 0; m < long3_1; m++) {
            var final = matriz3[p][m];
            valorf2 = valorf2 + final;
        }
        console.log("la suma de la columna " + (p + 1) + " es " + valorf2);
    }
    for (var p = 0; p < long3_1; p++) {
        var valorf3 = 0;
        for (var m = 0; m < long3; m++) {
            var final = matriz3[m][p];
            valorf3 = valorf3 + final;
        }
        console.log("la suma de la fila " + (p + 1) + " es " + valorf3);
    }
}
function verCuadradas(matrizUno, matrizDos) {
    var matrizUnoPrimeraDimension = obtenerPrimeraDimension(matrizUno);
    var matrizUnoSegundaDimension = obtenerSegundaDimension(matrizUno);
    var matrizDosPrimeraDimension = obtenerPrimeraDimension(matrizDos);
    var matrizDosSegundaDimension = obtenerSegundaDimension(matrizDos);
    if (matrizUnoPrimeraDimension == matrizUnoSegundaDimension && matrizDosPrimeraDimension == matrizDosSegundaDimension && matrizDosPrimeraDimension == matrizUnoPrimeraDimension) {
        return true;
    }
    else {
        return false;
    }
}
function cmabiarDiagonal(matrizUno, matrizDos) {
    var long = matrizUno.length;
    var verCond = verCuadradas(matrizUno, matrizDos);
    var matrizUnoNueva = [];
    var matrizDosNueva = [];
    if (verCond == true) {
        for (var k = 0; k < long; k++) {
            for (var j = 0; j < long; j++) {
                if (k == j) {
                    var valor1 = matrizUno[k][k];
                    var valor2 = matrizDos[k][k];
                }
                else {
                }
            }
        }
    }
    else {
        console.log("no existe como hacer el cambio");
    }
}
