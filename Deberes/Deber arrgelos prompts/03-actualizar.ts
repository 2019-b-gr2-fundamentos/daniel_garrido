import { matrizLibro } from "./interfaces/matrizLibro.interface";
import * as prompts from "prompts";
import { crearLibros } from "./02-crear";


export async function actualizar(biblioteca:matrizLibro[]){
    console.log('Selecciona el ISBN del libro a actualizar:');
    console.log(biblioteca);
    const ISBrequerido = await prompts({
            type:'number',
            name:'ISBN',
            message:'Coloque el ISBN del libro',
            validate:value => typeof value != "number"?'solo numeros':true
    })

    const indice = biblioteca.findIndex(  // Este me devuelve el indice del arreglo que cumple la condicion del return
        function (matrizLibro){
            return matrizLibro.ISBN == ISBrequerido.ISBN
        }
    )
    console.log('a continuacion coloque la actualizacion del libro')
    const nuevoLibro = await crearLibros(1);
    biblioteca[indice]=nuevoLibro[0];
    console.log('Este es el nuevo arreglo')
    console.log(biblioteca);
    
    return biblioteca;
}

















