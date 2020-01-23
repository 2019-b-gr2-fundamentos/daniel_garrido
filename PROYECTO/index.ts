
//PARA JAVASCRYPT
//const Sumalib = require('lib-garrido2019/lib/suma');  
//requiere es para importar la funcion despues va el nombre de la libreria, y despues la direccion de la funcion
// corremos ---> npm run empezar <--- en el .json renombramos la parte de test como "empezar" 
// el comando de arriba, nos dice que debemos correr la pureba llamada "empezar"
/*en TS
import = imporat 
* = todo
as = como
from= de 
*/
import * as Sumalib from 'lib-garrido2019/lib/area';
const respuesta = Sumalib(4,5)
console.log('la respuesta es :',respuesta);
