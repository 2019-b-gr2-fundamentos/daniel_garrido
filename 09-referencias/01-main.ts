function main(){
    let uno=1;
    let dos=uno;
    let tres = dos;
    console.log('uno',uno);
    console.log('dos',dos);
    console.log('tres',tres);
    uno = 5;
    console.log('uno',uno);
    console.log('dos',dos);
    console.log('tres',tres);
    let arreglo = [1,2,3];
    let otroArreglo = [];
    let a = arreglo[0];
    let b = arreglo[1];
    console.log(arreglo)
    let miotroarreglo = arreglo.push(2);
    console.log(miotroarreglo);
    let otroArreglo2 = [...arreglo]
    console.log[otroArreglo2]


    let darniel = {
        id:1,
        nombre: 'Daniel',
        sueldo:"3200"
    }

    /*PARA EVITAR LA INMUTABILIDAD DEBEMOS CLONAR AL OBJETO
    EN EESTE CASO   
    */


    //para guaradar nuevos arreglos o para generar copias 
    /* miobjeto = {...nombredelOBJET}
    pueden ser la cantidad que sea
    y siempre 3 puntos
    son direcciones de memerioa totalmente diferentes 
    */
    
;}
main();