// do while 
//acepta booleanos y expresiones
var vecesQueHeComido = 0;
do {
    console.log('vamos a comer');
    vecesQueHeComido = vecesQueHeComido + 1;
    switch (vecesQueHeComido) {
        case 1:
            console.log('desayuno');
            break;
        case 2:
            console.log('almuerzo');
            break;
        case 3:
            console.log('merienda');
            break;
        default:
            console.log('gorditos');
            break;
    }
} while (vecesQueHeComido < 3);
{
    vecesQueHeComido = 0;
    switch (vecesQueHeComido) {
        case 1:
            console.log('desayuno');
            break;
        case 2:
            console.log('almuerzo');
            break;
        case 3:
            console.log('merienda');
            break;
        default:
            console.log('gorditos');
            break;
    }
}
/*
1 Analisis
2 Algebra
3 Compiladores
5 programacion
7 calculo
11 fisica
13 ingles


Si es inpar aumentar a analisis socioeconomico
si es par aumentamos a algebra
si es multiplo de 3 aumentamos a compiladores
*/
var numero = 0;
var Analisis = 0;
var Algebra = 0;
var Compiladores = 0;
var programacion = 0;
var calculo = 0;
var fisica = 0;
var ingles = 0;
do {
    numero = numero + 1;
    if ((numero % 13) == 0) {
        ingles = ingles + 1;
    }
    else {
        if ((numero % 11) == 0) {
            fisica = fisica + 1;
        }
        else {
            if (numero % 7 == 0) {
                calculo = calculo + 1;
            }
            else {
                if (numero % 5 == 0) {
                    programacion = programacion + 1;
                }
                else {
                    if (numero % 3 == 0) {
                        Algebra = Algebra + 1;
                    }
                    else {
                        if (numero % 1 == 0) {
                            Analisis = Analisis + 1;
                        }
                    }
                }
            }
        }
    }
} while (numero == 1000);
console.log("la cantida de deberes de ingles fue " + numero);
