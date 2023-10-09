/*
1. Comprueba que no se muestra nada por el terminal con "node ex3.js"
2. Asigna un valor a la variable "numero" para que se muestren por el terminal TODOS los console.log del código. Actualmente, estamos asignando un 0.
3. BONUS: ¿Cual es el valón mínimo entero que resuelve este ejercicio?
*/

let numero = 500;

if (numero > 0) {
  console.log("El número es mayor de 0.");
}

if (numero > 100) {
  console.log("El número es mayor de 100.");
}

if (numero > 500) {
  console.log("El número es mayor de 500.");
}

// Respuesta ej 3. --> El número entero mínimo seria 501, porque este número es mayor que 0, que 100 y que 500 respectivamente, de esta manera podemos mostrar los 3 mensajes de las 3 condiciones porque en todas se cumplen.