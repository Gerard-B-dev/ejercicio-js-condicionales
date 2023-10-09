/**
 * 1. Ejecuta node ex4.js y comprueba cuantos mensajes se muestra por pantalla
 * 2. Asigna un valor adecuado a la variable "número" para que, por consola, se muestra tan solo "BUP!BUP!"
 */

let numero = 0; /** Solamente puedes modificar esta línea */

if (numero <= 0) {
  console.log("BUP!BUP!");
}

if (numero <= -1) {
  console.log("CROAK!!");
}

// Respuesta: He asignado el número 0 y solo se cumple en la primera condición (TRUE) y se muestra el mensaje "BUP!BUP!". La segunda condición no se cumple con el valor 0 --> 0 <= 0 --> TRUE / 0 <= -1 --> FALSE