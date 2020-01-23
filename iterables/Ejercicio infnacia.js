// 1)Crear un arreglo 5 elemntos
var arreglo = []; // Inicialize el arrelgo 
//   2) Caada elemnto de 1 o 0
for (var arreglo_1 = prompt("ingrese"); arreglo_1 > 0;)
    // nEste bloque me dice si en el floron hay un solo elemnto
    var arreglofloroon = [0, 0, 1, 0, 0];
var ecistefloron = false;
for (var i = 0; i < 5; i++) {
    if (arreglofloroon[i] == 1) {
        ecistefloron = true;
    }
    else {
        ecistefloron = false;
    }
}
if (ecistefloron == true) {
    console.log("adivinar");
}
// A esto se lo llama la tecnica de la bandera --> flag 
// la cual nos permite identificar si existe o no un elemnto
//   Ej [0,0,1,1,0]
//   Al menos un elemnto un "1" 
//Funcion para saver elemntops de 1 y ceros 
Math.floor(Math.random() * 2); // suelta ceros o unos
/*
El arreglo inicia con cero elementos
el arreglo necesita n elementos
tu le metes un elemento con el push y la funcion math
compara la lingitud del arreglo y que sea la que quiero
El cero significa no tengo el flooron
*/
