import { matrizLibro } from "./interfaces/matrizLibro.interface";
import * as prompts from "prompts";

export async function buscarArray (biblioteca:matrizLibro[]){
    const menuPostCreacion = {
        type: 'select',
        name: 'value',
        message: 'Cual es el parametro para buscar',
        choices: [
          { title: 'ISBN',description: 'Buscar por ISBN', value: '0', },
          { title: 'Nombre', description :'buscar por nombre',value: '1' }
        ],
        initial: 0
      }
    const menuMenu =  await prompts(menuPostCreacion);
    if(menuMenu.value == 0){
        const ISBrequerido = await prompts({
        type:'number',
        name:'ISBN',
        message:'Coloque el ISBN del libro a buscar',
        validate:value => typeof value != "number"?'solo numeros':true
                })
        const indice = biblioteca.findIndex(  // Este me devuelve el indice del arreglo que cumple la condicion del return
                function (matrizLibro){
            return matrizLibro.ISBN == ISBrequerido.ISBN
        })
        console.log('el libro es:')
        console.log(biblioteca[indice]);
    }else if(menuMenu.value == 1){
        
        const libroBuscado = await prompts({
            type:'text',
            name:'libroPerdido',
            message: 'escriba el libro que desea buscar'
        }) 
        const libroEncontrado = biblioteca.find(function(biblioteca){
            return biblioteca.Nombre == libroBuscado.libroPerdido;
        })
        console.log('el libro que busca es:')
        console.log(libroEncontrado);
    }
}




/*
const ejemplo = [ { Nombre: 'dan1', Autor: 'daniels', ISBN: 54, Editorial: 'dan',Color:'rojo' },
  { Nombre: 'dan2', Autor: 'adfasdf', ISBN: 47, Editorial: 'adf',Color:'azul' } ]

buscarArray(ejemplo).then().catch();
*/