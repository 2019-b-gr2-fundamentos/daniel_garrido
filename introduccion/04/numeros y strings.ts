const numeroUno = 1; // camelCase
const numero_dos = 2;
let resultado = 0;
//SUMA
resultado = 1 + 2;
// RESTAR
resultado = 1 - 2;
// MULTIP´LICACION
resultado = 1 * 2;
// DIVIDIR
resultado = 1 / 2;
// EXPONENCIAL
resultado = 1 ^ 2;
// RESTAR
resultado = 1-2;
// MODD
resultado = 4%2;//0---> reSSIDO
resultado = 4 % 3;//1-->RESIDUO

resultado = 7 % 3; // 
console.log("pera" + 2);


//NUMEROUNO-> TODO MAYUS (SEPARACION NO)
//NUMERO_UNO-> mayusculas guion bajo
//NumeroUno->
//numerouno-> python-->
//numero_uno->



//strings

// Notemos que con --- "\n" podemos saltar las lineas
// Para literalmente imprimir --->"Hola mundo"<--- Debemos utilizar el escape de caracter-----  \   el ejemplo en la linea 29
// Algunos caracteres todavia salen incluso utilizando el "escape de caractetr"
//Escape de caracter t,r,n----- la \t = produce un tab.....\r = no se sabe.....>>>Si se utiliza 
const mensaje = "\"Hola Mundo\"";
const saludo = '\'Adios\n Mundo\'';
console.log(mensaje + " " +saludo);


//Template strings
//Las comas invertidas {ala do del 1 } nos permite hacer el templete strings
// Esto es similar a sumar las variables string, miara la linea 40 suelta lo mismo que la lina 49

const edad = 30;
const saludoEdad = `Mi edad es : ${edad}`;
console.log (saludoEdad);

const saludoxd = `${mensaje}${saludo}`;
console.log (saludoxd);

/////////////////////////// Deber hacer todo lo que se hizo en esta hoja pero en php
////Entender las expresiones reluglares    https://regexr.com/

// Contamos los elementos
const nombreLongitud = '   Daniel Garrido'
console.log (nombreLongitud.length);

//Eliminar espacios al principio y al final
console.log(nombreLongitud.trim());
console.log(nombreLongitud);


//Cambiar a mayuscula
console.log(nombreLongitud.toUpperCase());
console.log(nombreLongitud.toLowerCase());
console.log(nombreLongitud.replace("x","o"));
console.log(nombreLongitud.replace("r","i"));
console.log(nombreLongitud.replace("\n",""));


//Search
console.log(nombreLongitud.search("a")); //1  ----->la posicion partiendo de cero
console.log(nombreLongitud.search("G")); //7 ----->la posicion contando con cero
console.log(nombreLongitud.search("Daniels")); //-1  ----> suelta -1 pq no se encuentra la letra en la palabra


//slice --- cortar un pedazo de pizza
console.log(nombreLongitud.slice(7,14));  // Esta parte nos suelta Garrido pues imprime solo los caracteres entre los limite de 7-14

// Indice 
console.log(nombreLongitud.indexOf("a"));
console.log(nombreLongitud.indexOf("f"));
console.log(nombreLongitud.indexOf(" "));

// Includes--- Devuelve un boolaneo 
console.log(nombreLongitud.includes(" "));

// Starts and Ends---- Empieza o termina ----booleano
console.log(nombreLongitud.endsWith("r"));
console.log(nombreLongitud.startsWith("D"));

//Substring
console.log(nombreLongitud.substring(0,6));
// subsrting=slice.....search=index off





