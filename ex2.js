/*
¿Que va a mostrar por el terminal cuando hagamos node ex2.js? ¿Por qué?
*/

let numero = 3;

if (numero < 2) {
  console.log("Bruuuu!");
} else {
  console.log("Cuack!");
}

// Respuesta: Va a mostrar el mensaje "Cuack!" porque la condición del if no se cumple (false) y pasa directamente al else, como la condición del if 3 < 2 no se cumple, se evalua como false.