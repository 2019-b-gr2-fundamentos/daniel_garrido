 
 // ---------------------------->    for
 // Necesitamos 3 cosas
 // 1) Declarar uyna variable
 // 2) Condition (Expresion)
 // 3) Incrementar, Disminuir
// Notemos que en la condion nop puedo usar ek "==" debo utilizar cosas como != o => o <
//aHORA notemos que en el for va a leer el bloque de codigo tantas veces como impongamos con la conficion
 
let bandera = 0;
for(let i=0; i<10; i++){
    bandera = bandera + i;
    console.log(bandera);
}

/*Notemos que si imprimimos vandera nos va a solar 0+1+2+3+4+5+6+7+8+9 osea 49 
Estod se debe a que consolo.log bandera al estar dentro del bloque de codigo me va reasignando la bandera,pero si le ponia afuera del bloque 
del for se me imprime 9 
*/


for (let numeoroExMiCrush = 7; numeoroExMiCrush != 0; numeoroExMiCrush--){
    console.log("ES CAN DA LO!", numeoroExMiCrush);
}



for (let numeoroExMiCrushescandalisado = 0; numeoroExMiCrushescandalisado <= 7; numeoroExMiCrushescandalisado++){
    console.log("ES CAN DA LO!", numeoroExMiCrushescandalisado);
}



/*
 Arrelgos
 1 Elemnto ---> variable const numeoro =1
 conjunto del MISMO elemntos (  [1, 2, 3, 4, 5]  )
Conjunto de difenrentes elemntos ( [1, "abs", true])
Conclusion las variables inmutables se reaisginan lo que proiduce que cualquiere tipo de variable entre en su lugar
y puede cambiar la naturaleza original de la misma
*/

const arregloNumeros = [1, 2, 3, 4, 5];
arregloNumeros.push(6);
arregloNumeros.pop;
console.log("arreglo de numneros",arregloNumeros);
/*
Arreglo 
1)Elementos
2)indices (index based)
3)Longitud de arreglos -> # de elementos
*/

console.log(arregloNumeros.length);

const indiceElemntoUno = 0;
arregloNumeros[indiceElemntoUno];
arregloNumeros[0]
const indiceElemntoCinco = 4;
arregloNumeros[indiceElemntoUno]
arregloNumeros[0]

/*
//Quiero el numeor cinco
1) indice
arreglo ---> [1,2,3,4,5]
              0,1,2,3,4
               INDICES
puedo escribir la constante indiceElemntoCinco o el numero 4 que es el indice que quiero
*/
console.log(arregloNumeros[4]);


/* ITERAR UN ARREGLO
CONDICIONES DENTRO DEL FOR
1. let tamaño = arregloNumeros.legth
2. tamaño > 0
3. tamaño --
*/
for(let tamaño = arregloNumeros.length - 1 ; tamaño >= 0; tamaño--){
    console.log(arregloNumeros[tamaño])
}
















