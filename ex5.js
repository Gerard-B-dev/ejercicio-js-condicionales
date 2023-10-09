/**
 * Crea un código de manera que, al ejecutar node ex5.js, pase lo siguiente:
 *
 * 1. Si la variable número vale 5 o más, mostramos por el terminal "El número es mayor de 5"
 * 2. En caso contrario, mostramos por el temrinal "El número es menor de 5"
 *
 * Vídeo: https://oscarm.tinytake.com/msc/ODc3NTg0NV8yMjE5Mjc5NQ
 */

let numero = 2;

// AQUÍ DEBAJO TU CÓDIGO. Necesitas codificar una estructura if...else. Mira los ejemplos anteriores. Cambia el valor de la variable "numero" para comprobar que has implementado bien la solución

if(numero > 5) {
    console.log("El número mayor es 5");
} else {
    console.log("El número es menor de 5");
}

// Respuesta: Por ejemplo, si tomamos el valor 6 como se cumple la condición del if (6 > 5) nos muestra el mensaje
//            - Si tomamos el valor 2 como no se cumple la condición del if (2 > 5), se evalua como false y pasa a ejecutyar el mensaje del else.