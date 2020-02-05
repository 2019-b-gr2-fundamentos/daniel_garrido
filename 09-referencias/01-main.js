var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function main() {
    var uno = 1;
    var dos = uno;
    var tres = dos;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    uno = 5;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    var arreglo = [1, 2, 3];
    var otroArreglo = [];
    var a = arreglo[0];
    var b = arreglo[1];
    console.log(arreglo);
    var miotroarreglo = arreglo.push(2);
    console.log(miotroarreglo);
    var otroArreglo2 = __spreadArrays(arreglo);
    console.log[otroArreglo2];
    var darniel = {
        id: 1,
        nombre: 'Daniel',
        sueldo: "3200"
    };
}
main();
