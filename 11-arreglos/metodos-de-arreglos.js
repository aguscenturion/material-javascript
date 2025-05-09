// MÉTODOS COMUNES DE ARREGLOS
let frutas = ["manzana", "banana", "naranja"];

// ✅ MODIFICAR ELEMENTOS DE UN ARREGLO (por índice)
frutas[1] = "frutilla"; // reemplaza "banana" por "frutilla"
console.log("Modificado:", frutas);

// ✅ DESESTRUCTURACIÓN DE ARREGLOS
// Permite extraer valores directamente en variables
const colores = ["rojo", "verde", "azul", "amarillo"];

// Extraer los primeros dos elementos
const [primero, segundo] = colores;
console.log("Primero:", primero); // "rojo"
console.log("Segundo:", segundo); // "verde"

// Saltar elementos
const [, , tercero] = colores;
console.log("Tercero:", tercero); // "azul"

// Usar el operador rest
const [color1, ...resto] = colores;
console.log("Primer color:", color1); // "rojo"
console.log("Resto:", resto); // ["verde", "azul", "amarillo"]

// .push() - agrega al final
frutas.push("kiwi");

// .pop() - elimina el último
frutas.pop();

// .unshift() - agrega al inicio
frutas.unshift("uva");

// .shift() - elimina el primero
frutas.shift();

// .length - largo del array
console.log("Cantidad:", frutas.length);

// .includes() - verifica si existe
console.log("¿Incluye banana?", frutas.includes("banana"));

// .indexOf() - posición de un elemento
console.log("Posición de naranja:", frutas.indexOf("naranja"));

// .join() - convierte a string con separador
console.log("Unido con - :", frutas.join(" - "));

// .slice() - retorna una porción (no modifica original)
console.log("Slice:", frutas.slice(0, 2));

// .splice() - cambia el contenido (sí modifica)
frutas.splice(1, 1, "mango"); // elimina 1 en pos 1 y agrega "mango"

// .filter() - filtra según condición
let filtradas = frutas.filter((f) => f.length > 5);

// .map() - transforma cada elemento
let enMayusculas = frutas.map((f) => f.toUpperCase());

// .forEach() - recorre sin retornar
frutas.forEach((f) => f.toUpperCase());
