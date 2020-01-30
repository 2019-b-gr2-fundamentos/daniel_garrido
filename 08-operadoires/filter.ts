
export function calcular(funcion,numUno,numDos){
    return funcion(numUno,numDos);
}
export function sumar(numUno,numDos){
    return numUno + numDos
}

export function resta(numUno,numDos){
    return numUno - numDos
}

//Estos dos son exactamente lo mismo

calcular(sumar,5,3); //8

calcular(
    function (numUno,numDos){
        return numDos + numUno
    },
    3,
    1
)//8


//Asi se le dice al Ts que recibe una fucnion y suelta un boolean
                        //   d 
export function filter(arreglo:any[],
    funcion: (
        valorActual:any,
        indice?:number,
        arreglo?:any[]) => boolean
        ): any[] {

            //de aqui a abajo esta el programa

        const arregloFiltrado = [];
        for(let i = 0;i<arreglo.length; i++){
            const respuestaFuncion = funcion(
                arreglo[i],
                i,
                arreglo,
            );
            if(respuestaFuncion == true){
            arregloFiltrado.push(arreglo[i])
            }
        }
        return arregloFiltrado;
    }


export function map(arreglo:any[],
    funcionRecibida:(
        valorActual:any,
        indice?:number,
        arreglo?:any[]) =>
    ):any[]{
        //codigo
        const arregloModificado = []
        for(let i =0; i<=arreglo.length;i++){
            const respuestaFuncion = funcionRecibida(
                arreglo[i],
                i,
                arreglo
            );
            if(respuestaFuncion[i]==arreglo[i]){
                arregloModificado[i]==arreglo[i]
            }else{
                arregloModificado[i+1] == respuestaFuncion
            }
        }
    return arregloModificado
    }
   