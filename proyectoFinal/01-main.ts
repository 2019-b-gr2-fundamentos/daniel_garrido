import * as prompts from 'prompts';
import { encontrarBlanco } from './02-espacioBlanco';
export function imprimirMatriz (matriz :any[][]){
    for (let t = 0; t < matriz.length; t++) {
         console.log(matriz[t]);
    }
}

const matr = [
    ['',7,3],
    [8,5,1],
    [2,4,3]
]
async function main(){
        const matrizEjmplo = [
            [0.0,0.1,0.2],
            [1.0,1.1,1.2],
            [2.0,2.1,2.2]
        ]
        console.log('Basados en la guia ingrese:')
        imprimirMatriz(matrizEjmplo)
        imprimirMatriz(matr)
        const espacioBlanco = encontrarBlanco(matr);
        const preguntaFichaObjeto = await prompts({
            type: 'number',
            name: 'value',
            message: 'ingrese la posicion de la ficha a mover, si  quiere mover la primera ficha coloque "0.0 "',
            //validate: value => value  != espacioBlanco[0]? `Nightclub is 18+ only` : true
        });
        
        
            const preguntaFichaDestino = await prompts({
            type: 'number',
            name: 'value',
            message: 'ingrese la posicion a donde quiera movers quiere moverse a ultima posicion coloque "3.3 "',
            float: true,
            validate: value => value  != espacioBlanco? `Este no es un epacio en balnco` : true
        })

}

main();