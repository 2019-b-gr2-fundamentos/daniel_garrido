import {duenio} from './duenio.interface'
export interface AnimalPerrito {   //interface --> (struct)
    nombreCientifico: string;     //se separa por punto y coma
    nombre : string;    
    clan : string;
    edad ?: number;               // el signo de interrogacion significa que es opcional 
    // hijos : null,
    perritas ?: string[];  //  a cualquier propiedad de las struct, podmeos poner "null"
    vacunas ?: boolean,
    duenio ?: duenio
}


// colocamos export al principio para poder usar en cualquier archivo de ts 
// el nombre .intreface solo es para saber que en ese archivo tenemos una interface