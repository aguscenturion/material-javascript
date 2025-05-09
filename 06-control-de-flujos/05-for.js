// FOR, FOR...OF y FOR...IN
// Son estructuras de control que permiten repetir un bloque de código varias veces

// FOR CLÁSICO
// Se usa cuando sabés cuántas veces se quiere repetir algo (ej: recorrer un array con índices)
for (let i = 0; i < 5; i++) {
  console.log("🔁 for clásico - i vale:", i);
}

// FOR...OF
// Se usa para recorrer directamente los valores de un array (más limpio que el for clásico)
let colores = ["rojo", "verde", "azul"];

for (let color of colores) {
  console.log("🎨 for...of - Color:", color);
}

// FOR...IN
// Se usa para recorrer las claves (propiedades) de un objeto
let persona = {
  nombre: "Lucía",
  edad: 30,
  profesion: "Ingeniera",
};

for (let clave in persona) {
  console.log(`🔑 for...in - ${clave}: ${persona[clave]}`);
}

// RESUMEN:
// for clásico → útil para tener control total sobre el índice
// for...of → recorrer arrays y strings de forma limpia
// for...in → recorrer objetos y acceder a sus propiedades
