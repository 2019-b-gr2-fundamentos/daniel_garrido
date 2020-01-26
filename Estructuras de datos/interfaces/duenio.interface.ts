//Estructura de datos en lenguaje tipado
import { AnimalPerrito } from './animal-perrito.interface'
export interface duenio {
    nombres :string;
    apellidos : string;
    cedula ?: string;   // puede empezar con cero y si ponemos number automaticamento nos elimina el cero
    fechaNacimiento : number;
    mascotas ?: AnimalPerrito[] // arreglo de AnimalPerrito
}
