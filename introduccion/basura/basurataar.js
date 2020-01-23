var matrisUno = [
    [1, 2, 3],
    [4, 5, 6],
    [5, 4, 6]
];
var matrisDos = [
    [9, 8, 7],
    [1, 5, 9],
    [7, 1, 3]
];
function camBIoxd(matrisUno, matrisDos) {
    var long = matrisUno.length;
    var matrizUnoNueva = [[]];
    var matrizDosNueva = [[]];
    for (var k = 0; k < long; k++) {
        for (var j = 0; j < long; j++) {
            if (k == j) {
                var valor1 = matrisUno[k][k];
                var valor2 = matrisDos[k][k];
                matrizUnoNueva[k][k] = valor1;
                matrizDosNueva[k][k] = valor2;
            }
            else {
                var valor3 = matrisUno[k][j];
                var valor4 = matrisDos[k][j];
                matrizUnoNueva[k][j] = valor3;
                matrizDosNueva[k][j] = valor4;
            }
        }
    }
    console.log(matrizUnoNueva);
    console.log(matrizDosNueva);
}
camBIoxd(matrisUno, matrisDos);
