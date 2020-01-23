/*
Obtener la primera dimension y la segunda dimension , ademas ver que todos los arreglos 
dentro del arregllo son iguales


*/

function compararMatriz(
    matrizUno: number[][],
    matrizDos: number[][]
): boolean{
   const eFectivamente = TienenMAtricesIGualDIm(
       matrizUno,matrizDos
   );
    if (eFectivamente){
        return true;
    }else {
        return false;
        }
}

function TienenMAtricesIGualDIm (
    matrizUno : number[][],
    matrizDos :number [][]
):boolean {
    const matrizUnoPrimeraDimension = obtenerPrimeraDimension(
        matrizUno
        );
    const matrizUnoSegundaDimension = obtenerSegundaDimension(
        matrizUno
        );
    const matrizDosPrimeraDimension = obtenerPrimeraDimension(
        matrizDos
        );
    const matrizDosSegundaDimension = obtenerSegundaDimension(
        matrizDos
        );
    const noHayfalsos = matrizUnoPrimeraDimension != false && matrizUnoSegundaDimension != false && matrizDosSegundaDimension != false &&
    matrizDosPrimeraDimension != false;

    const sonMismaDim = matrizDosPrimeraDimension == matrizUnoPrimeraDimension && matrizDosSegundaDimension == matrizUnoSegundaDimension;

    if(noHayfalsos){
            if(sonMismaDim){
                return true;
            }else{            
                return false
            }
        }else{
            return false;
        }
}


function obtenerPrimeraDimension(matrizUno: number[][]): number | boolean{
    // VALIDACIONES
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
        const primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo;
    }else{
        return false;
    }
}

function obtenerSegundaDimension(matrizUno: number[][]): number | boolean{
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido==true){
        let longitudActualMaxima = 0; // Auxiliar
        let longitudActualMinima = -1; // Auxiliar
        for(let i = 0; i < matrizUno.length; i++){
            const elementoActual = matrizUno[i]; // arreglo
            const longitudActual = elementoActual.length; // segunda dimension
            if(longitudActualMaxima < longitudActual){
                longitudActualMaxima = longitudActual;
            }
            if(longitudActualMinima == -1) {
                longitudActualMinima = longitudActual;
            }else{
                if(longitudActual < longitudActualMinima){
                    longitudActualMinima = longitudActual;
                }
            }
        }
        if(longitudActualMaxima != longitudActualMinima){
            return false;
        }else{
            return matrizUno[0].length;
        }
    }else{
        return false;
    }
}

function verificarTodosLosElementosDeUnArregloSonArreglo(
    arreglo: any[]
):boolean{
    for(let i = 0; i < arreglo.length; i++){
        const elementoActual = arreglo[i];
        const esUnArreglo = typeof elementoActual == 'object' &&
        elementoActual.indexOf; // Truty
        if(!esUnArreglo){
            return false;
        }
    }
    return true;
}


function main(){
        const x = [
            [1,2,1],
            [3,2,0],
            [3,1,0]
        ];
        const y = [
            [1,2,1],
            [3,2,0],
            [3,1,0]
        ];
       console.log(x);
    }

main();











/* Debaugers herramient apara ayudar a encontrar los errores en el putanal de codigo
fecha 18/12 hay dos informes, en el primero tienes que hacer la funcion 
obtenerPrimeraDimension
obtenerSegundaDimension
verificarTodosLosElementosDeUnArregloSonArreglo

En el segundo vamos a ver los debugers
Los puntos de quiebe son los puntos rojos que podmeos poner a la izquierda del numero de linea,
esotos puntos le dicen al debugeador


BUSCAR EL DEBUGER PARA PHP
*/







function igualdad(
    matriz1 : number [][],
    matriz2 : number [][] 
){
const doble = compararMatriz(matriz1,matriz2);
    if(doble == true){
            const long1 = matriz1.length
            const long2 = matriz2.length
            const long1_2 = matriz1[0].length
            const long2_2 = matriz2[0].length
            const valor3 = long1 * long1_2 
            let valor = 0
            if(long1 == long2 && long1_2 == long2_2){
                    for(let i = 0; i< long1; i++){
                        for(let j = 0; j<long1_2; j++){
                            if(matriz1[i][j]==matriz2[i][j]){
                                    valor = valor + 1
                }else{
                    console.log(`${matriz1[i][j]} no es igual a ${matriz2[i][j]}`)
                }
            }
        }
        if(valor == valor3){
            console.log("efectivamente son iguales")
        }
    }else{
        console.log("hablas piedras ni cagando son iguales")
    }
}else{
    console.log("hablas piedras ni cagando son iguales")
}
}




function suma(matriz3 : number[][]){
    const long3 = matriz3.length
    const long3_1 = matriz3[0].length
    for(let p = 0; p < long3 ; p++){
        let valorf2 = 0
        for(let m = 0; m<long3_1; m++){
            let final = matriz3[p][m]
            valorf2 = valorf2 + final
      }
    console.log(`la suma de la columna ${p + 1} es ${valorf2}`)
    }

    for(let p = 0; p < long3_1 ; p++){
        let valorf3 = 0
        for(let m = 0; m<long3; m++){
            let final = matriz3[m][p]
            valorf3 = valorf3 + final
      }
    console.log(`la suma de la fila ${p + 1} es ${valorf3}`)
    }
}

function verCuadradas(
    matrizUno:number[][],
    matrizDos:number[][]
):boolean{
    const matrizUnoPrimeraDimension = obtenerPrimeraDimension(
        matrizUno
        );
    const matrizUnoSegundaDimension = obtenerSegundaDimension(
        matrizUno
        );
    const matrizDosPrimeraDimension = obtenerPrimeraDimension(
        matrizDos
        );
    const matrizDosSegundaDimension = obtenerSegundaDimension(
        matrizDos
        );  
    if(matrizUnoPrimeraDimension == matrizUnoSegundaDimension && matrizDosPrimeraDimension == matrizDosSegundaDimension && matrizDosPrimeraDimension == matrizUnoPrimeraDimension){
        return true
    }else{
        return false}
}




function cmabiarDiagonal (
    matrizUno : number [][],
    matrizDos : number [][]
){
    const long = matrizUno.length;
    const verCond =  verCuadradas(matrizUno,matrizDos);
    let matrizUnoNueva :number [][] = [];
    let matrizDosNueva :number [][] = [];
    if(verCond == true){
        for(let k = 0; k<long;k++){
            for(let j = 0; j<long;j++){
                if(k==j){
                    let valor1 =  matrizUno[k][k];
                    let valor2 =  matrizDos[k][k];
                    
                }else{

                }
            }
        }
    }else{console.log("no existe como hacer el cambio");}
}









