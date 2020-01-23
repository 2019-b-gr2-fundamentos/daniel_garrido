// boolean
// string
// null -> object
// number
// PERSONA
// CASI EN TODOS LOS LENGUAJES
// Struct -> Estructura de datos
// Clase -> Estructura de datos -> Metodos!
// ANIMAL -> nombre cientifico, color principal
// fecha nacimiento, peso, genero, altura 
var edad = 20;
var ejemploEstructura = {
    'nombreCientifico': 'canis lupus familiaris',
    "llave": "valor",
    enojo: undefined,
    edadActual: edad,
    noEsNecesario: true,
};
// Estructura de datos en lenguaje NO TIPADO
var poliPerro = {
    nombreCientifico: 'Canis Lupus Familiaris',
    nombre: 'Grandote',
    clan: 'Poliperro',
    edad: 10,
    hijos: null,
    perritas: ['Manuela', 'Zoraida'],
    vacunado: true,
};
console.log(poliPerro.nombre); // Canis Lupus Familiaris
// Estructura de datos en lenguaje TIPADO
var poliPerroAmarillo = {
    nombreCientifico: 'Canis Lupus Familiaris',
    nombre: 'Amarillo',
    clan: null,
};
var duenioPoliPerroAmarillo = {
    nombres: 'Adrian',
    apellidos: '',
    fechaNacimiento: 2,
    mascotasPerros: [poliPerroAmarillo]
};
// Guardar datos en una estructura de datos
poliPerroAmarillo.duenio = duenioPoliPerroAmarillo;
poliPerroAmarillo.edad = 4;
poliPerroAmarillo.vacunado = true;
// Acceder a los datos de una estructura de datos
console.log(poliPerroAmarillo.duenio.nombres);
console.log(poliPerroAmarillo.duenio.apellidos);
console.log(poliPerroAmarillo.nombre);
console.log(poliPerroAmarillo.edad);
