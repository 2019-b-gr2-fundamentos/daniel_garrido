export function everyNuevo (arreglo:any[],
    funcion:(valorActual:any,
        indice?:number,
        arreglo?:any[]
        )=> boolean):boolean {
        for (let j = 0; j < arreglo.length; j++) {
            const respuestaFuncion = funcion(
                arreglo[j],
                j,
                arreglo
            );
            if (respuestaFuncion == false){
                return false;
            }else {return true }
        }
}
