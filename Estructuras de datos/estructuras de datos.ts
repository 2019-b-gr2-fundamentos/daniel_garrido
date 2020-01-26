/*
Casi en todos los lenguajes, nosotros podemos usar 
--->Struct<--- aqui tenemos solo datos {19,Daniel,Garrido,42}
clase --> struct---> Metodos!---->{edad:19,nombre:Daniel,apellido:Garrido,peso:42}
*/

const edad = 20;


const ejemploEstructura = {
    nombreCientifico:'canis lupus familiaris', //puedes usar comillas simples antes o despues de los 2 puntos, pero no necesario
    "llave" : "valor",
    noEsNecesario : true,//puedes poner coma en el ultimo archivo
    enojo:undefined,
    edadactual:edad   //podemos llamar a variables
}

//Estructura de datos en lenguaje no tipado
const poliPerro = {
    nombreCientifico:'canis lupus familiaris',
    nombre : 'grandote',
    clan : 'poliperro',
    edad : 10,
    hijos : null,
    perritas : ['manuela','zoraida'],
    vacunas : true,
}


console.log(poliPerro.vacunas) // true






import {AnimalPerrito} from './interfaces/animal-perrito.interface'
import { duenio } from './interfaces/duenio.interface';
const poliPerroAmarillo :AnimalPerrito = {   //le estamos diciendo que poliperroamarillo tiene la interface Animalperrito
    nombreCientifico:'canis lupus familiaris',
    nombre : 'AMARILLO',
    clan : 'poliperro',
    edad : 4,
    //hijos : null,
    perritas : [],
    vacunas : false, 
}


const duenioPoliAmarillo  : duenio={
    nombres:"Adrian",
    apellidos:'',
    fechaNacimiento:2,
    cedula: "171913",
    mascotas: [poliPerroAmarillo],
}

console.log(duenioPoliAmarillo.mascotas)











