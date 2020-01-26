import { matrizLibro } from "./interfaces/matrizLibro.interface";
import * as prompts from "prompts";

export async function eliminar(biblioteca:matrizLibro[]){
    console.log('Escriba el ISBN del libro que desea eliminar');
    console.log(biblioteca);
    const ISBrequerido = await prompts({
        type:'number',
        name:'ISBN',
        message:'Coloque el ISBN del libro a elminar',
        validate:value => typeof value != "number"?'solo numeros':true
            })

        const indice = biblioteca.findIndex(  // Este me devuelve el indice del arreglo que cumple la condicion del return
               function (matrizLibro){
              return matrizLibro.ISBN == ISBrequerido.ISBN
    })
    biblioteca.splice(indice,1);
    console.log('la nueva biblioteca es:')
    console.log(biblioteca);
    return biblioteca;
}

/*
const ejemplo = [ { Nombre: 'dan1', Autor: 'daniels', ISBN: 54, Editorial: 'dan',Color:'rojo' },
  { Nombre: 'dan2', Autor: 'adfasdf', ISBN: 47, Editorial: 'adf',Color:'azul' } ]

  eliminar(ejemplo);
  */