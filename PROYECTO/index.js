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


ejemplo
si en el archivo suma.js de la LIBRERIA existiera mas de un module.exports
les ponemos nombres tal que
module.exports.a
module.exports.loromero
module.exports.c

y despues  en lugar del asterisco nosotros utilizarmes corchetes y colocaremos las funciones a exportar tq
import {a,loromero} as nombrexD from ....direccion


las livrerias no las debemos verisonalizar en el github
por eso usamos el git.ignore

recuerda tambien usamos proyecto pilas para el informe
proyecto no se sube al internet, libreria si

npm install ---> va a correr el .json del PROYECTO e isntalara la libreria
*/
var piii = require('lib-garrido2019/lib/pi');
var Sumalib = require('lib-garrido2019/lib/area')
var respuesta = Sumalib(5,8)
console.log('la respuesta es :', respuesta);
console.log('el valor de pi es :', piii);
