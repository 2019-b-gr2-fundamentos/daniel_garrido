// creaate read edit and eliminate
var prompts = require('prompts');
prompts;
//importe todo lo de prompts
function main() {
    obtenerdatosAnimalPerrito();
}
function obtenerdatosAnimalPerrito() {
    //paradigma de programacion
    //SINCRONO VS ASINCRONO
    console.log('inicio');
    var promesaedad = prompts({
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
    });
    console.log(promesaedad);
    promesaedad //aqui ponemos la promesaedad pq solo una promesa tiene las funciones .then y .catch
        .then(function (datos) {
        console.log('datos', datos); // AQUI PUEDO SEGUIR, aqui recibo la edad
        var promesNombre = prompts({
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        });
        console.log(promesNombre);
        promesNombre //aqui ponemos la promesaedad pq solo una promesa tiene las funciones .then y .catch
            .then(function (datosNombr) {
            console.log('Nombre', datosNombr); // AQUI PUEDO SEGUIR, aqui recibo la edad
        })
            .catch(function (error) {
            console.log('error', error);
        });
    })
        .catch(function (error) {
        console.log('error', error);
    });
    console.log('fin');
}
main();
/*

    const promesNombre = prompts({
        type: 'string',
        name: 'nombre',
        message: 'Puedes darme tu nombre?',
    })
    console.log(promesNombre);
    promesNombre  //aqui ponemos la promesaedad pq solo una promesa tiene las funciones .then y .catch
    .then(
        (datosNombr)=>{
            console.log('Nombre',datosNombr)// AQUI PUEDO SEGUIR, aqui recibo la edad
        }
    )
    .catch(
        (error)=>{
            console.log('error',error)
        }
    )
*/
