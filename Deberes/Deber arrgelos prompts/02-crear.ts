import * as prompts from 'prompts'
import { matrizLibro } from "./interfaces/matrizLibro.interface";

export async function crearLibros(numeroLibros : number) {
    let matrizCero: matrizLibro[] = [];
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
    for (let i = 0; i < numeroLibros; i++) {
        const prueba = await prompts(preguntaUnlibro);
        matrizCero.push(prueba);
    }
    
    return matrizCero    

};





