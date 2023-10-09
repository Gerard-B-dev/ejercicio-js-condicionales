/*

Lee la información sobre el operador: && https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_and

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos

1. Antes de ejecutar "node ex6.js"; razona: qué vamos a ver por el terminal? Por qué ?

*/

if (4 > 3 && 6 > 5) {
  console.log("Esta condición se cumple");
}

if (4 > 3 && -1 > 0) {
  console.log("Esta condición también se cumple?");
}

// Respuesta: se cumple la primera condición (4 > 3 && 6 > 5). El operador && significa Y. Está evaluando si estas dos condiciones son verdaderas o falsas.
// Como las dos condiciones son de valor TRUE el resultado es TRUE y como se cumple la primera condición se muestra el mensaje: "Esta condición se cumple"
// Con el operador lógico && si las dos condiciones son TRUE devuelve TRUE

