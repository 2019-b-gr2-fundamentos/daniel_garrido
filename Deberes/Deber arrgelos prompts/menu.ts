import { matrizLibro } from "./interfaces/matrizLibro.interface";
import * as prompts from 'prompts'
import { actualizar } from "./03-actualizar";
import { eliminar } from "./04-borrar";
import { buscarArray } from "./05-buscar";

export async function menuuuuu (matriz:matrizLibro[]){
    const preguntas = {
        type: 'select',
        name: 'menu',
        message: 'Que desea hacer?',
        choices: [
          { title: 'Actualizar', description: 'Actualaizar los datos de un libro especifico', value: 0 },
          { title: 'Eliminar', description: 'Eliminar un libro de la biblioteca', value: 1 },
          { title: 'Buscar', description: 'Buscar por el ISBN', value: 2 },
          { title: 'crear', description: 'crear un nuevo libro', value: 3 },
          { title: 'Salir', description: 'Dejar el arreglo tal cual', value: 4 },
          { title: 'Imprimir', description: 'Imprimir la biblioteca', value: 5 }
          
        ],
        initial: 1
      }
    const hi =await prompts(preguntas);
    if(hi.menu==0){
        const matrizactualizada = await actualizar(matriz);
        menuuuuu(matrizactualizada);
    }else if(hi.menu==1){
        const matrizNueva = await eliminar(matriz);
        menuuuuu(matrizNueva);
    }else if(hi.menu==2){
        const elemnto = await buscarArray(matriz);
        menuuuuu(matriz)
    }else if(hi.menu==3){
        const preguntaUnlibro = [
            {
                    type:'text',
                    name:'Nombre',
                    message:'Coloque el nombre del libro',
                },{
                    type:'text',
                    name:'Autor',
                    message:'Coloque el autor del libro'
                },{
                    type:'number',
                    name:'ISBN',
                    message:'Coloque el ISBN del libro',
                    validate:value => typeof value != "number"?'solo numeros':true
                },{
                    type:'text',
                    name:'Editorial',
                    message:'Coloque la editorial del libro'
                },{
                    type:'text',
                    name:'color',
                    message:'coloque el color de la portada'
                }
            ];
        const nuevoLIBRO = await prompts(preguntaUnlibro)
        matriz.push(nuevoLIBRO);
        menuuuuu(matriz);
    }else if(hi.menu==5){
        console.log(matriz);
        menuuuuu(matriz);
    }

}

