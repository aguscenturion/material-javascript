// ------------------------------
// DECLARACIÓN DE VARIABLES EN JAVASCRIPT
// ------------------------------

// var (ya no se recomienda, se puede redeclarar)
var nombre = "Juan";
var nombre = "Pedro";

// let (permite reasignación)
let age = 25;
age = 26;

// const (constante, no se puede reasignar)
const PI = 3.1416;

// Buenas prácticas: usar let y const

// ------------------------------
// NOMBRES DE VARIABLES - FORMATOS COMUNES
// ------------------------------

// camelCase: primera palabra en minúscula, las siguientes con mayúscula
let nombreCompleto = "Juan Pérez";

// PascalCase: cada palabra empieza con mayúscula (generalmente se usa en nombres de clases)
let NombreCompleto = "María López";

// snake_case: palabras separadas por guiones bajos
let nombre_completo = "Carlos Díaz";

// kebab-case: NO se puede usar en JavaScript como nombre de variable (error de sintaxis)
// let nombre-completo = "Ana Gómez"; ❌ No válido

// ------------------------------
// REASIGNACIÓN DE VARIABLES
// ------------------------------

let edad = 25;
edad = 26; // se reasigna a 26
edad = 30; // ahora es 30
console.log("Edad final:", edad); // 30

// ------------------------------
// DECLARACIÓN Y ASIGNACIÓN EN DOS PASOS
// ------------------------------

let ciudad;
ciudad = "Buenos Aires";

// ------------------------------
// DECLARACIÓN Y ASIGNACIÓN EN UN SOLO PASO
// ------------------------------

let pais = "Argentina";

// ------------------------------
// DECLARACIÓN MÚLTIPLE
// ------------------------------

let a, b, c;

// ------------------------------
// ASIGNACIÓN MÚLTIPLE
// ------------------------------

let x = 1,
  y = 2,
  z = 3;
