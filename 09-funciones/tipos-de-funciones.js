// TIPOS DE FUNCIONES EN JAVASCRIPT

// 🔹 Función declarada - declarativas (hoisting permitido)
console.log(saludar("Juan Antes")); // ✅ Esto funciona

function saludar(nombre) {
  return `Hola, ${nombre}`;
}

console.log(saludar("Ana"));

// 🔹 Función expresada - expresivas (no se puede usar antes de declararla)
const despedir = function (nombre) {
  return `Adiós, ${nombre}`;
};
console.log(despedir("Luis"));

// 🔹 Función flecha (arrow function) - sintaxis más corta - (no se puede usar antes de declararla)
const sumar = (a, b) => a + b;
console.log("Suma:", sumar(5, 3));

// 🔹 Función auto-invocada (Immediately Invoked Function Expression - IIFE)
// Se ejecuta inmediatamente después de ser declarada
// Se usa para crear un ámbito privado y evitar la contaminación del espacio de nombres global
(function () {
  console.log("Esto se ejecuta automáticamente");
})();

(() => {
  console.log("Función flecha auto-invocada");
})();
