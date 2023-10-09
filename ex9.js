/**
 * Operador !
 *
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos
 *
 * 1. Modifica el valor de las variables adecuadamente para que se muestre el mensaje por consola "Yo soy de Barcelona, pero no tengo una segunda residencia en Platja d'aro..."
 */

let soyDeBarcelona = true;
let tengoSegundaResidencia = false;

/** NO TOCAR A PARTIR DE AQUÍ */
if (soyDeBarcelona && !tengoSegundaResidencia) {
  console.log(
    "Yo soy de Barcelona, pero no tengo una segunda residencia en Platja d'aro..."
  );
}
// Respuesta: Le damos valor TRUE a la variable soyDeBarcelona y cambiamos el valor de la variable tengoSegundaResidencia a TRUE de tal manera que dentro del If
// (!tengoSegundaResidencia) que cambia el valor de false a TRUE. Por tanto en la condición tenemos -->  TRUE && TRUE --> TRUE y ejecuta el if.