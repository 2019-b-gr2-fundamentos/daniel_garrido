import { Duenio } from './duenio.interface';
// ./ -> Relativo a donde esta el archivo 

export interface AnimalPerrito { // interface -> (Struct)
    nombreCientifico: string;
    nombre: string;
    clan: string;
    edad?: number; // Opcionales
    // hijos: null,
    perritas?: string[]; // Opcionales
    vacunado?: boolean; // Opcionales
    duenio?: Duenio;
}