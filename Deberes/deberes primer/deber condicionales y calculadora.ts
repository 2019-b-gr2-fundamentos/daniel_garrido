let operacion = prompt("ingrese la operacion");
const numerounostring = prompt("ingrese el primer numero ");
const numerodosstring = prompt("ingrese el segundo numero ");

const numerouno = Number(numerounostring);
const numerodos = Number(numerodosstring);

if (operacion == "suma"){
    console.log( numerouno + numerodos);
}

if (operacion == "resta"){
    console.log( numerouno - numerodos);
}

if (operacion == "multiplicacion"){
    console.log( numerouno * numerodos);
}

if (operacion == "division"){
    console.log( numerouno / numerodos);
}

if (operacion == "area"){
    const lado3 = prompt("ingrese el tercer numero");
    const lado3realnofake = Number(lado3);
    const perimetro = (numerouno + numerodos + lado3realnofake);
    const semiperimetro = (perimetro / 2);
    const operacionfinal = ((semiperimetro - numerouno) * (semiperimetro - numerodos) * (semiperimetro - lado3realnofake) * semiperimetro);
    console.log(Math.sqrt(operacionfinal));
}








//------------------------------->>>>Deber de if y switch <<<<<<------------------------------------------
// Ejemplo 1.- si el cliente me pone un angulo notable, el navegador devolvera el angulo asignado
//solo usa la funcion seno
//30,150,210,330-->  1/2
//45,135,225,315---> +- raiz de 2/2
//60,120,240,300---->+- raiz de 3 /2 

const angulotring = prompt("seno de " )
const angulo = Number(angulotring);
if (angulo == 30 || angulo == 150){
    console.log("1/2");

}

if (angulo == 210 || angulo == 330){
    console.log("-1/2");
}

if (angulo == 45 || angulo == 135){
    console.log("raiz de dos sobre dos");

}

if (angulo == 225 || angulo == 315){
    console.log("menos raiz de dos sobre dos");

}

if (angulo == 60 || angulo == 120){
    console.log("raiz de tres sobre dos");

}

if (angulo == 240 || angulo == 300){
    console.log("menos raiz de tres sobre dos");
}



////Ejemplo 2 si el cliente pone dos anuglos calcula el tercer angulo
//////calculo de un tercer angulo en un triangulo

const valorgardouno = prompt ("ingrese el angulo");
const gradorealnofake = Number(valorgardouno);
const valorgardodos = prompt ("ingrese el angulo");
const gradorealnofakedos = Number(valorgardodos);

if( gradorealnofakedos + gradorealnofake < 180){
   console.log(180 - gradorealnofakedos - gradorealnofake);
    
}else{
    console.log("la sumatoria de angulos de un triangulo es 180");
}

//Ingresar controles 1 y 2 y luego poner las notas de las pruebas sobre 10 y posteriormente  los examenes sobre 10

const control1 = prompt("ingrese la nota del control 1");
const control1nofake = Number(control1);

const prueba1 = prompt("ingrese la nota de la prueba 1");
const prueba1nofake = Number(prueba1);

const examen1 = prompt("ingrese la nota del examen 1");
const examen1nofake = Number(examen1);

const control2 = prompt("ingrese la nota del control 2");
const control2nofake = Number(control2);

const prueba2 = prompt("ingrese la nota de la prueba 2");
const prueba2nofake = Number(prueba2);

const examen2 = prompt("ingrese la nota del examen 2");
const examen2nofake = Number(examen2);

const promedio1 = ((prueba1nofake * 2.5) + control1 + (examen1nofake * 2.5)); 
const proemdio2 = ((prueba2nofake * 2.5) + control2 + (examen2nofake * 2.5));

const notafinal = (proemdio2 + promedio1);
const notafinalxd = Number(notafinal);
if(notafinalxd >= 14 && notafinalxd > 9){
    console.log("pasaste el semestre campeon")
}else{
    console.log("lee abajo")
}

if(notafinalxd <= 9){
    console.log("segunda es todo")
}


////////ejemplos switch
// Dia de la semana
const diadelasemana = prompt("ingrese el numero");
const diadelasemananofake = Number(diadelasemana);
switch (diadelasemananofake) { 
    case 1: 
       console.log("Es Lunes") 
       break 
    case 2: 
        console.log("Es Martes") 
       break 
    case 3: 
        console.log("Es Miércoles") 
       break 
    case 4: 
        console.log("Es Jueves") 
       break 
    case 5: 
        console.log("Es viernes") 
       break 
    case 6: 
    case 7: 
        console.log("Es fin de semana") 
       break 
    default: 
        console.log("Ese día no existe") 
}

///pon el trago y te dice la cantidad de alchool
const trago = prompt("ingrese su trago favorito por favor");
switch (trago) {
    case "Sidra":
      console.log("2-8")
      break
    case "cerveza":
        console.log("2.5-4")
       break
    case "Vino":
        console.log("5.5-14")
        break
    case "Vodka":
        console.log("20")
        break
    case "Caña":
         console.log("34-54")
         break    
    case "Ron":
         console.log("37-80")
         break 
    case "Tequila":
        console.log("37-50")
        break 
    default:
      console.log("el switch es de maricas, se tenia que decir y se dijo >:v")
      break
  }


  //Pones el pais y te suelta la cantidad de mundiales de futbol que ha ganado
  const campeon = prompt("ingrese el pais")

  switch (campeon) {
    case "Brazil":
      console.log("5")
      break
    case "alemania":
        console.log("4")
        break
    case "italia":
            console.log("4")
            break
    case "argentina":
      console.log("2")
      break
    case "francia":
      console.log("2")
      break
    case "uruguay":
      console.log("2")
      break
    case "españa":
      console.log("1")
      break
    case "inglaterra":
      console.log("1")
      break
    default:
      console.log("No ha ganado nada, como tu con ella")
      break;
  }




