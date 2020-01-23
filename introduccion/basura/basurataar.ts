const matrisUno = [
    [1,2,3],
    [4,5,6],
    [5,4,6]
];
const matrisDos = [
    [9,8,7],
    [1,5,9],
    [7,1,3]
]


function camBIoxd(
    matrisUno:number[][],
    matrisDos:number[][]
){
const long = matrisUno.length;
    let matrizUnoNueva :number[][] = [[]];
    let matrizDosNueva :number[][] = [[]];
        for(let k = 0; k < long;k++){
             for(let j = 0; j < long;j++){
                    if(k==j){
                        let valor1 =  matrisUno[k][k]
                        let valor2 =  matrisDos[k][k]
                        matrizUnoNueva[k][k]=valor1
                        matrizDosNueva[k][k]=valor2
               }else{
                    let valor3 =  matrisUno[k][j]
                    let valor4 =  matrisDos[k][j]
                    matrizUnoNueva[k][j]=valor3
                    matrizDosNueva[k][j]=valor4
                 }
           }
       }
console.log(matrizUnoNueva)
console.log(matrizDosNueva)
}

camBIoxd(matrisUno,matrisDos);




