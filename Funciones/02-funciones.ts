// Varios Punteros----mantener un alt

function sumar(numUno:number, numDos:number): number{
    return numUno + numDos
}

function multiplicar(numUno:number, numDos:number): number{
    return numUno * numDos
}

function dividir(numUno:number, numDos:number): number{
    return numUno / numDos
}

function restar(numUno:number, numDos:number): number{
    return numUno - numDos
}

function main (){
    calculadora();

}
function calculadora (){
    const operacion:string = prompt("Selecciona una opcion : ´suma-1´, ´resta-2´,´multiplicacion-3´,´division-4´,´terminamos-5´");
    const esSuma : boolean = operacion == "suma" || operacion == "1" || operacion == "suma-1";
    const esResta : boolean = operacion == "resta" || operacion == "2" || operacion == "resta-2";
    const esMultipli : boolean = operacion == "multiplicacion" || operacion == "3" || operacion == "multiplicacion-3";
    const esdivi : boolean = operacion == "division" || operacion == "4" || operacion == "division-4";
    const terminamos : boolean = operacion == "terminamos" || operacion == "5" || operacion == "terminamos-5";
    const estavalida:boolean = esSuma || esResta || esdivi || esMultipli ;
    if(estavalida){ //Una funcion recursiva es aquella quye se llama a si mismo y acaba al cumplir una condicion
        const numUno:number = +prompt("numero 1")
        const numDos:number = +prompt("numero 2")  ///Solo el javascript si ponemos el +, por detras de cualquier cosa se convierte en numero
        let resultado = 0;
        if(esSuma){
            resultado = sumar(numUno, numDos);
        }
        if(restar){
            resultado = restar(numUno, numDos);
        }
        if(esMultipli){
            resultado = multiplicar(numUno, numDos);
        }
        if(esdivi){
            resultado = dividir(numUno, numDos);
        }
        console.log(resultado);
        calculadora();
    }else{
        if(terminamos){
            console.log("´adios :c ´")
        }
        calculadora();
    }


}


/*
1) señeccionar la opcion
2.1) la seleccion no es valida
2.1.1) Vuelve a seleccionar la operacion
2.2) la seleccion es valida
2.2.1) Ingresa el primer numero
2.2.1) Ingresa el segundo numero
2.2.3) Ejecuta la operacion 
*/