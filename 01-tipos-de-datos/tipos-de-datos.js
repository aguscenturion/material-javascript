// ------------------------------
// TIPOS DE DATOS EN JAVASCRIPT
// ------------------------------

// Primitivos
// Los tipos primitivos son aquellos que representan un solo valor
let numero = 42; // number - entero
let decimal = 3.14; // number - float - flotante
let cadena = "Hola"; // string - cadena de texto
let booleano = false; // boolean - true o false - verdadero o falso
let indefinido = undefined; // undefined - indefinido
let nulo = null; // null - ausencia de valor
let simbolo = Symbol("simbolo"); // symbol - valor único e inmutable

// Tipo especial: bigint
// El tipo bigint se utiliza para representar números enteros grandes que no pueden ser representados por el tipo number
// Se utiliza la letra "n" al final del número para indicar que es un bigint
let numeroGrande = 1234567890123456789012345678901234567890n; // bigint

// No primitivos - Complejos
// Los tipos no primitivos son aquellos que pueden contener múltiples valores o propiedades
let objeto = { nombre: "Juan", edad: 30 }; // object
let arreglo = [1, 2, 3]; // array
let funcion = function () {
  return "Hola";
}; // function
