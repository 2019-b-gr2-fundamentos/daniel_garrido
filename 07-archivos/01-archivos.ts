import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";
import { Estudiante } from "./interfaces/estudiante.interface";
import * as prompts from 'prompts'

async function main(){
    let  contador = 0;
    const contenidoArchivo = leerArchivo(
        './ejemplo.txt'
    );
    const arregloCargadoArchivo = JSON.parse(contenidoArchivo); //transforma  de  texto to arreglos
    const aregloEstudiantes : Estudiante[] = arregloCargadoArchivo;
    const arregloPreguntas = [
        {
            type : 'text',
            name : 'nombre',
            message : 'ingresa tu nombre'
    }
];
const respuestaEstudianteUno = await prompts(arregloPreguntas);
const nuevoResgistroUno ={
    id : contador,
    nombre: respuestaEstudianteUno.nombre
};
contador ++;
aregloEstudiantes.push(nuevoResgistroUno);

const respuestaEstudianteDOs = await prompts(arregloPreguntas);
const nuevoResgistroDos ={
    id : contador,
    nombre: respuestaEstudianteDOs.nombre
};
contador ++;
aregloEstudiantes.push(nuevoResgistroDos);


console.log('cual arreglo queires editar?')
console.log(aregloEstudiantes);

const idAbuscar =  await prompts({
    type: 'number',
    name: 'id',
    message : 'ingresa el Id del registro a editar'
})



// OPERADORES ---> SUSTITUYE AL FOR!!
const indiceEncontrado = aregloEstudiantes.findIndex( //return condition
    function(valorActual,indice,arreglo){  // le mandamos funciones 
        //console.log(valorActual);
        //console.log(indice);
        //console.log(arreglo);
        return valorActual.id == idAbuscar.id; // nos devuelve el indice 
    }
)

const nombreAeditar = await prompts({
    type:'text',
    name:'nombre',
    message: 'ingresa el nuevo nombre'
})



aregloEstudiantes[indiceEncontrado].nombre = nombreAeditar.nombre;
console.log(aregloEstudiantes)

const buscar = await prompts({
    type:'text',
    name:'nombre',
    message: 'busca por id o por nombre'
})

const estudianteEncontrado = aregloEstudiantes.find(
    function(valorActual){
        return valorActual.nombre == buscar.nombre;
    }
)

console.log('estudiante encontrado:',estudianteEncontrado);










    /*
const textoLeido = leerArchivo('./ejemplo.txt');

    const nuevoContenido = 'TENGO HAMBRE :( \n';
    escribirArchivo('./ejemplo.txt', '');
    console.log(textoLeido + nuevoContenido);
    */

}

main().then().catch();