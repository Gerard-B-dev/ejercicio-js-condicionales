/**
 * Operador !
 *
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos
 *
 * 1. Modifica el valor de la variable "nombre" para que se muestre por consola el mensaje "Tú NO eres Alex..."
 */

let nombre = "Juan";

/**NO TOCAR A PARTIR DE AQUÍ */
if (nombre != "Alex") {
  console.log("Tú NO eres Alex...");
}

// Respuesta: la condición del if es evaluada como TRUE, EL SIGNO != significa "diferente a..", por tanto "Juan" es diferente a "Alex" y ejecuta el console.log