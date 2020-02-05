var filter_1 = require("./filter");
function main() {
    var arregloEStudi = [
        { id: 1, nombre: "adrian", nota: 7 },
        { id: 2, nombre: "juan", nota: 8 },
        { id: 3, nombre: "adrian", nota: 4 },
        { id: 4, nombre: "adriana", nota: 10 },
        { id: 5, nombre: "dante", nota: 5 },
    ];
    var RespuestForeach = arregloEStudi.forEach(function (valorActual, indice, arreglo) {
        //console.log(RespuestForeach);
        //valorActual.nota20  = valorActual * 2; 
    });
    var RespuestMap = arregloEStudi.map(function (valorActual, i, arreglo) {
        var nuevo = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota: valorActual.nota,
            nota20: valorActual.nota * 2
        };
        return nuevo;
    });
    console.log('respuesta map', RespuestMap);
    var respuestaFilter = arregloEStudi.filter(function (valorActual, id, arreglo) {
        var condicion7 = valorActual.nota > 7;
        var condicion5 = valorActual.nota < 5;
        return condicion7 || condicion5;
    });
    console.log('respuesta filter', respuestaFilter);
    var respuestaOr = arregloEStudi.some(function (valorActual, id, arreglo) {
        var condicion = valorActual.nota < 8;
        return condicion;
    });
    console.log('respuesta some :', respuestaOr);
    var respuestaEvery = arregloEStudi.every(function (valorActual, id, arreglo) {
        var condicion = valorActual.nota >= 4;
        return condicion;
    });
    console.log('repsuesta every', respuestaEvery);
    var respuestaReduce = arregloEStudi.reduce(function (acumulador, valorActual) {
        var calculo = acumulador + valorActual.nota;
        return calculo;
    }, 0);
    console.log('la sumatoria de las notas es:', respuestaReduce);
    console.log('el promedio es:', respuestaReduce * arregloEStudi.lenght);
    var repsuestaFilterNUestro = filter_1.filter(arregloEStudi, function (valorActual, i, arreglo) {
        /*console.log('valor:',valorActual);
        console.log('Indice:',i);
        console.log('arreglo:',arreglo);*/
        return valorActual.nota >= 7;
    });
    console.log('respuesta nuestro filter:', repsuestaFilterNUestro);
    var respuestaSomeNuevo = filter_1.someNuevo(arregloEStudi, function (valorActual, i, arreglo) {
        return valorActual.nota >= 11;
    });
    console.log('respuesta nuestro some', respuestaSomeNuevo);
    /*
    operador - FOREACH
    envia--> nada
    recibe-->nada
    
    Operador -- MAP
    trandsformar el arreglo o mutar el arreglo
    Enviamos--> valor actual modificado
    Recibir --> nuevo arreglo con valores modifiados
    
    Filter ---> Filtra el arreglo
    enviamos --> condicion
    recibimos--->nuevo arreglo con los valores filtrados
    
    Or--->some (uno cumpla)
    some ---> devuelve verdadero o falso dependiendo de la condicion
            Si alguno cumple devuelve true
            si ninguno cumple false
    Enviamos ---> condicion
    recibir---> boolean
    
    every --> devuelve V o F
            Si todos cuimpen Verd
            Si alguno no cumplio False
            Enviamos ---> condicion
    recibir---> boolean
    
    
    
    //reduce ---> devuelve un valor con un calculo aplicado
    empieza su iteracion al inicio del arrglo hasta acabar el arreglo
    enviamos un calculo
    
    reduceright al contrario empieza al final hasta llegar al principio
    
    */
}
main();
