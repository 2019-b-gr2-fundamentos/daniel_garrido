// creaate read edit and eliminate
import * as prompts from 'prompts';
prompts
//importe todo lo de prompts
function main(){
    obtenerdatosAnimalPerrito();
}

function obtenerdatosAnimalPerrito(){
    //paradigma de programacion

    //SINCRONO VS ASINCRONO
    console.log('inicio');
    const promesaedad = prompts({
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?',
//Exsiten funciones que nos devueven promesas, todas las promesas tienen dos probabilidades, todo bien o todo mal
//Sincronica, el programa espera hasta que llegue la informacion y despues continua ejecutando el codigo
    })
    console.log(promesaedad);
    promesaedad  //aqui ponemos la promesaedad pq solo una promesa tiene las funciones .then y .catch
    .then(
        (datos)=>{
            console.log('datos',datos)// AQUI PUEDO SEGUIR, aqui recibo la edad
            const promesNombre = prompts({
                type: 'text',
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
        }
    )
    .catch(
        (error)=>{
            console.log('error',error)
        }
    )
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
//Es mas facil programar en el codigo sincronico
// el codigo asincrono es mas eficiente pero mas dificil
