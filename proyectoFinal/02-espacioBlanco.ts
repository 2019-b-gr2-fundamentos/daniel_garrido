
export function encontrarBlanco(matriz:any[][]){
    for (let j = 0; j < matriz.length; j++) {
        for (let i = 0; i < matriz[0].length; i++) {
            if (typeof matriz[j][i]== "string"){
                const valor = i + j*0.10;
                return valor.toFixed(1);
                break;
            }
        }
    }
}

const matr = [
    [1,7,3],
    [8,'',1],
    [2,4,3]
]


export function encontrarPosible(matriz:any[][]){
    const objtBlanco = encontrarBlanco(matriz);
    let valUno = 0;
    let valDos = 0;
    let valTres = 0;
    let valCuatro = 0;
    console.log(matriz[valUno+1][valTres])
    for (let j = 1; j < matriz.length+1; j++) {
        for (let i = 1; i < matriz[0].length+1; i++) {
            if(matriz[j][i-1] == ''){

                valUno = j+(i/10);
            
            }else if(matriz[j][i+1] == ''){
            
                valDos = j+(i/10);
            
            }else if(matriz[j+1][i] == ''){
            
                valTres = j+(i/10);
            
            }else if(matriz[j-1][i] == ''){
            
                valCuatro = j+(i/10);
            
            }
        
        }
    }

console.log(valUno,valDos,valTres,valCuatro)
}


encontrarPosible(matr);