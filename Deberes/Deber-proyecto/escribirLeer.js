"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function leerArchivo(path) {
    var resultado = fs.readFileSync(path, // PATH
    'utf-8' // CODIFICACION 
    );
    return resultado;
}
exports.leerArchivo = leerArchivo;
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