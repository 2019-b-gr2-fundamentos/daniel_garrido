import { matrizLibro } from "./interfaces/matrizLibro.interface";
import * as prompts from 'prompts';
import {crearLibros}  from "./crear";
import { eliminar } from "./borrar";
import { actualizar } from "./actualizar";
import { buscarArray } from "./buscar";
import { menuuuuu } from "./menu";
import { leerArchivo } from "./escribirLeer";


async function main (){
    /*
    const menuCreacion = await prompts({
            type : 'number',
            name : 'numeroLibros',
            message : 'cuantos libros va a colocar en el arrgelo?',
        })   
    const matrizCREADA = await crearLibros(menuCreacion.numeroLibros);
    console.log('esta es su matriz')
    console.log(matrizCREADA);*/
    const libro = leerArchivo('./hi.txt');
    const arregloLibro = JSON.parse(libro);
    const arreglofinal :matrizLibro[] = arregloLibro;  
    menuuuuu(arreglofinal);

}

main().then().catch();