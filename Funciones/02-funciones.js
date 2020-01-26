// Varios Punteros----mantener un alt
function sumar(numUno, numDos) {
    return numUno + numDos;
}
function multiplicar(numUno, numDos) {
    return numUno * numDos;
}
function dividir(numUno, numDos) {
    return numUno / numDos;
}
function restar(numUno, numDos) {
    return numUno - numDos;
}
function main() {
    calculadora();
}
function calculadora() {
    var operacion = prompt("Selecciona una opcion : ´suma-1´, ´resta-2´,´multiplicacion-3´,´division-4´,´terminamos-5´");
    var esSuma = operacion == "suma" || operacion == "1" || operacion == "suma-1";
    var esResta = operacion == "resta" || operacion == "2" || operacion == "resta-2";
    var esMultipli = operacion == "multiplicacion" || operacion == "3" || operacion == "multiplicacion-3";
    var esdivi = operacion == "division" || operacion == "4" || operacion == "division-4";
    var terminamos = operacion == "terminamos" || operacion == "5" || operacion == "terminamos-5";
    var estavalida = esSuma || esResta || esdivi || esMultipli;
    if (estavalida) {
        var numUno = +prompt("numero 1");
        var numDos = +prompt("numero 2"); ///Solo el javascript si ponemos el +, por detras de cualquier cosa se convierte en numero
        var resultado = 0;
        if (esSuma) {
            resultado = sumar(numUno, numDos);
        }
        if (restar) {
            resultado = restar(numUno, numDos);
        }
        if (esMultipli) {
            resultado = multiplicar(numUno, numDos);
        }
        if (esdivi) {
            resultado = dividir(numUno, numDos);
        }
        console.log(resultado);
        calculadora();
    }
    else {
        if (terminamos) {
            console.log("´adios :c ´");
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
