/*
Arreglo dentro de arreglos ---> dimensiones
*/
var arreglos1 = [
    [1, 2],
    [3, 5]
];
arreglos1[0][0]; //Esto suelta 1
arreglos1[1][0]; //Esto suelta 3
// multi´licar el 0*n elemento +
//multiplicar el 
function productocruz(vectores) {
    var lenght1 = vectores[0].length;
    var total = 0;
    for (var nvece = 0; nvece < lenght1; nvece++) {
        var dan = vectores[0][nvece];
        var dan1 = vectores[1][lenght1 - 1];
        var multiplicar = dan * dan1;
        total = total + multiplicar;
        // let dan3 = vectores[0][nvece+1];
        // let dan4 = vectores[1][lenght1-2];
        //let mul2 = dan3 * dan4 ;     
    }
    console.log(total);
}
function main() {
    productocruz([[3, 2, 4, 8], [5, 2, 3, 4]]);
}
main();
//(1,2,3) x (2,3,5)
/*
1) definir el tamaño
2) repetir el calculo n veces, n = tamaño del vector
3.1) acceder al primer elemento del primer arreglo
3.2) acceder al ultimo elemnto del segundo arreglo
3.3) sumar los elemntos

3.4) acceder al primer elemento +1 del primer arreglo
3.5) acceder al penultimo elemnto del segundo arreglo
*/
