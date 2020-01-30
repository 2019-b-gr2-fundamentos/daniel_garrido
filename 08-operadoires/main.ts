import { filter, map } from "./filter";

function main(){
    const arregloEStudi:any = [
        {id:1, nombre:"adrian",nota:7},
        {id:2, nombre:"juan",nota:8},
        {id:3, nombre:"adrian",nota:4},
        {id:4, nombre:"adriana",nota:10},
        {id:5, nombre:"dante",nota:5},
    ];



const RespuestForeach =  arregloEStudi.forEach(
        function(valorActual,indice,arreglo){
            //console.log(RespuestForeach);
            //valorActual.nota20  = valorActual * 2; 
        }
    )
    
const RespuestMap = arregloEStudi.map(
    function(valorActual,i,arreglo){
        const nuevo ={
            id:valorActual.id,
            nombre:valorActual.nombre,
            nota:valorActual.nota,
            nota20: valorActual.nota *2
        };
        return nuevo;
    }
);
console.log('respuesta map',RespuestMap)

const respuestaFilter = arregloEStudi.filter(
    function(valorActual,id,arreglo){
        const condicion7 = valorActual.nota>7;
        const condicion5 = valorActual.nota<5;
        return condicion7||condicion5;
    }
)
console.log('respuesta filter',respuestaFilter);

const respuestaOr = arregloEStudi.some(
    function(valorActual,id,arreglo){
        const condicion =  valorActual.nota <8;
        return condicion;
    }
)
console.log(respuestaOr);


console.log('respuesta filter',respuestaFilter);

const respuestaEvery = arregloEStudi.every(
    function(valorActual,id,arreglo){
        const condicion =  valorActual.nota >= 4;
        return condicion;
    }
)
console.log(respuestaEvery);


const respuestaReduce =  arregloEStudi.reduce(
    function(acumulador,valorActual){
        const calculo = acumulador + valorActual.nota;
        return calculo
    },
    0 
);
console.log('la sumatoria de las notas es:',respuestaReduce)
console.log('el promedio es:',respuestaReduce*arregloEStudi.lenght)






const repsuestaFilterNUestro = filter(
    arregloEStudi,
    function(valorActual,i,arreglo){
    /*console.log('valor:',valorActual);
    console.log('Indice:',i);
    console.log('arreglo:',arreglo);*/
    return valorActual.nota >= 7;
        }
    );

console.log('respuesta filter:',repsuestaFilterNUestro)

 

const respuestaMap = map(arregloEStudi,
    function(valorActual,i,arreglo){
        const nuevo ={
            id:valorActual.id,
            nombre:valorActual.nombre,
            nota:valorActual.nota,
            nota20: valorActual.nota *2
        };
    return nuevo
    }


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