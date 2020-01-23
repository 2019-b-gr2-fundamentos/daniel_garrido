//Condicionales 
const casado = true ;
if (casado == true){
  console.log("Si estoy casado");
} else {
    console.log("No estoy casado");
}

if (casado =! false){  // Expresion --> Booleano    // con el != ponemos "distinto
    console.log("No estoy casado");
} else {
    console.log("Si estoy casado");
}


const tengoMosa = false;
const casadoYMosero = casado ==true && tengoMosa == true;
if(casadoYMosero){
    console.log("Casado y mosero");
} else{
    console.log("O casado o Mosero o Nada");
}

//or 
//true y true == true
//true y false ==true
//false y true == true
//false y false == false
// con -->||<-- se une todo 









/*
//apaga la primera alarma
//bolita y lloro hasta segunda
//alarma y me levanto
//celularDescargado
//amaneceMuerto
//estaAcrivadaLaAlarma != true
//estaEnModoSilencio
//const seAtrasoAClase == true || apaga la primera alarma == true || bolitaYLloroHastaSegunda == true || alarmaYMeLevanto == true ||celularDescargado == true ||amaneceMuerto == true ||estaAcrivadaLaAlarma != true||estaEnModoSilencio==true
si se apaga la primera alarma o me hago bolita o el celular esta descargado o amenece muerto o no esta activada la alarma o el celular esta en modo silencio se atraso






*/





// Condicionales no boolenaos, el tryty y el falsy no funcionan en todos los lenguajes
// TRUTY

if(""){  // Un string vacio es un Falsy
    console.log("Truty");
}else{
    console.log("Falsy");
}


if("adb"){  // Un string con algo es truty
    console.log("Truty");
}else{
    console.log("Falsy");
}



if(-1){  // Un numero negativo es truty
    console.log("Truty");
}else{
    console.log("Falsy");
}

//Todos los numeros excepto el cero son truty 


if(null){  // El nulo es falsy
    console.log("Truty");
}else{
    console.log("Falsy");
}

//////////////////////////////-----> switch <----------------------------------------------------
//El switch solo funciona para casos especificos

/*
const calculo = "sumar"; //suamr restar multiplicar dividir

switch(calculo) {
    // code block
      break;
    case "restar":
      // code block
      break;
    case "multiplicar":
      // code block
      break;
    case "dividir":
      // code block
      break;
    default:
      // code block
  
    case "sumar":
        }

La computadora empieza con el switch comparado uno por uno los case
si ponemos el break, al momento de comparar se detienen al encontrar el caso a desear.
El break nos ayuda a no desperdiciar comparaciones  
prompt para cojer datos del navegador
Recuerda probar esto 
*/ 
const edadstring = prompt("Ingresar numero");
const edad = Number(edadstring);

if(edad <= 6){
  console.log("guagua")
}
 
if(edad > 6 && edad <= 18){
    console.log("guambra")
  }
 
if(edad > 18 && edad <= 65 ){
    console.log("longo")
  }
 
if(edad > 65){
    console.log("ruko")
  }
   
console.log()

/**
 6 Guagua
 18 Guambra
 65 Longo
66 ruku
 */





 
