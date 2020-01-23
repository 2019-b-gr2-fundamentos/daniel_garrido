/*
Alcanze de las variables, se definen por los bloques de codigos que por lo general esta
representado con las llaves {}
Cada bloque de codigo puede definir sus propias variables las cuales se pueden utilizar en otros bloques de codigo siempre y cuando 
los bloques sean "hijos" del anterior bloque.
*/ 
if(true){ // Bloque 1
    let edad = 30;
    console.log(edad); // 30
    if(edad){ // Bloque 2
        console.log(edad);
        if(edad){ // Bloque 3
            console.log(edad);
        }else{ // Bloque 4
            console.log(edad);
        }
    }else{ // Bloque 5
        console.log(edad);
    }
}else{ // Bloque 6
    console.log(edad); // undefined
    console.log("7 años de carcel");
}

/*Notemos que bloque 2,3,4 nos va a soltar 30, pero el bloque 6 nos va a soltar error pq no esta definido */