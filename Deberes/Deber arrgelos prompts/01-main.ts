import { matrizLibro } from "./interfaces/matrizLibro.interface";
import * as prompts from 'prompts';
import {crearLibros}  from "./02-crear";
import { eliminar } from "./04-borrar";
import { actualizar } from "./03-actualizar";
import { buscarArray } from "./05-buscar";
import { menuuuuu } from "./menu";


async function main (){
    const menuCreacion = await prompts({
            type : 'number',
            name : 'numeroLibros',
            message : 'cuantos libros va a colocar en el arrgelo?',
        })   
    const matrizCREADA = await crearLibros(menuCreacion.numeroLibros);
    console.log('esta es su matriz')
    console.log(matrizCREADA);
    menuuuuu(matrizCREADA);

}

main().then().catch();