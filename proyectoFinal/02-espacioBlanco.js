"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function encontrarBlanco(matriz) {
    for (var j = 0; j < matriz.length; j++) {
        for (var i = 0; i < matriz[0].length; i++) {
            if (typeof matriz[j][i] == "string") {
                var valor = i + j * 0.10;
                return valor.toFixed(1);
                break;
            }
        }
    }
}
exports.encontrarBlanco = encontrarBlanco;
var matr = [
    [1, 7, 3],
    [8, '', 1],
    [2, 4, 3]
];
function encontrarPosible(matriz) {
    var objtBlanco = encontrarBlanco(matriz);
    var valUno = 0;
    var valDos = 0;
    var valTres = 0;
    var valCuatro = 0;
    console.log(matriz[valUno + 1][valTres]);
    for (var j = 1; j < matriz.length + 1; j++) {
        for (var i = 1; i < matriz[0].length + 1; i++) {
            if (matriz[j][i - 1] == '') {
                valUno = j + (i / 10);
            }
            else if (matriz[j][i + 1] == '') {
                valDos = j + (i / 10);
                //}else if(matriz[j+1][i] == ''){
                // valTres = j+(i/10);
            }
            else if (matriz[j - 1][i] == '') {
                valCuatro = j + (i / 10);
            }
        }
    }
    console.log(valUno, valDos, valTres, valCuatro);
}
exports.encontrarPosible = encontrarPosible;
encontrarPosible(matr);
