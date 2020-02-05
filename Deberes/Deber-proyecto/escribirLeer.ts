import * as fs from 'fs';
import { matrizLibro } from './interfaces/matrizLibro.interface';
export function leerArchivo(path:string):string{
    const resultado = fs.readFileSync(
        path, // PATH
        'utf-8' // CODIFICACION 
    );
    return resultado;
}

/*
export function escribirArchivo( path: string,
    libro:matrizLibro[] ){
    fs.writeFileSync(
        path,  
        contenido,  
        'utf8'
        );
    }
    */