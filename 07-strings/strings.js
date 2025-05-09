// ------------------------------
// STRINGS EN JAVASCRIPT
// ------------------------------

// ------------------------------
// CREACIÓN DE STRINGS
// ------------------------------

let saludo = "Hola mundo";
let otroSaludo = "Hola otra vez";
let conComillas = "Ella dijo: 'Hola'";
let usandoBackticks = `Hola desde template literal`;

// ------------------------------
// MÉTODOS MÁS USADOS DE STRINGS
// ------------------------------

let texto = "  JavaScript es Genial  ";

// length → longitud del string (Incluye espacios)
console.log("Longitud:", texto.length); // "Longitud: 24"

// toUpperCase → convierte a mayúsculas
console.log("Mayúsculas:", texto.toUpperCase()); // "Mayúsculas: JAVASCRIPT ES GENIAL"

// toLowerCase → convierte a minúsculas
console.log("Minúsculas:", texto.toLowerCase()); // "Minúsculas: javascript es genial"

// trim → elimina espacios al principio y al final
console.log("Sin espacios:", texto.trim()); // "Sin espacios: JavaScript es Genial"

// trimStart → elimina espacios al principio
console.log("Sin espacios al inicio:", texto.trimStart()); // "Sin espacios al inicio: JavaScript es Genial  "

// trimEnd → elimina espacios al final
console.log("Sin espacios al final:", texto.trimEnd()); // "Sin espacios al final:   JavaScript es Genial"

// includes → verifica si contiene cierto texto
console.log("¿Incluye 'Genial'?", texto.includes("Genial")); // "¿Incluye 'Genial'? true"

// indexOf → posición de la primera ocurrencia (posición del inicio de 'es')
console.log("Posición de 'es':", texto.indexOf("es")); // "Posición de 'es': 12"

// lastIndexOf → última ocurrencia
console.log("Última posición de 'a':", texto.lastIndexOf("a")); // "Última posición de 'a': 20"

// slice → extrae parte de un string
console.log("Slice (0 a 10):", texto.slice(0, 10)); // "Slice (0 a 10):   JavaScri"
console.log("Slice (-5 a -3):", texto.slice(-5, -3)); // "Slice (-5 a -3): ia"

// substring → parecido a slice (pero sin negativos - lo toma como 0)
console.log("Substring (0 a 10):", texto.substring(0, 10)); // "  JavaScri"

// replace → reemplaza una parte del string
console.log("Reemplaza 'Genial':", texto.replace("Genial", "asombroso")); // "Reemplaza 'Genial':   JavaScript es asombroso  "

// split → divide un string en un array
let palabras = texto.trim().split(" "); // ["JavaScript", "es", "Genial"]
console.log("Palabras:", palabras); // "Palabras: [ 'JavaScript', 'es', 'Genial' ]"

// charAt → devuelve el carácter en una posición
console.log("Carácter en la posición 5:", texto.charAt(5)); // "Carácter en la posición 5: a"

// startsWith / endsWith
console.log("¿Empieza con '  Java'?", texto.startsWith("  Java")); // "¿Empieza con '  Java'? true"
console.log("¿Termina con 'Genial  '?", texto.endsWith("Genial  ")); //"¿Termina con 'Genial  '? true"

// padStart / padEnd → agrega caracteres al inicio o final hasta alcanzar una longitud deseada
console.log("PadStart (20):", texto.padStart(40, "*")); // "PadStart (40): ****************  JavaScript es Genial  "
console.log("PadEnd (20):", texto.padEnd(40, "*")); // "PadEnd (20):  JavaScript es Genial  ****************"

// repeat → repite el string
console.log("Repetido 3 veces:", "Hola ".repeat(3)); // "Repetido 3 veces:" "Hola Hola Hola "

// ------------------------------
// CONCATENACIÓN DE STRINGS
// ------------------------------

let nombre = "Juan";
let edad = 30;

// 1. Con el operador +
let mensaje1 = "Hola " + nombre + ", tienes " + edad + " años.";
console.log(mensaje1); // "Hola Juan, tienes 30 años."

// 2. Con template literals (backticks)
let mensaje2 = `Hola ${nombre}, tienes ${edad} años.`;
console.log(mensaje2); // "Hola Juan, tienes 30 años."

// 3. Con comas (dentro de console.log) (Agrega espacios automáticamente)
console.log("Hola", nombre, "tienes", edad, "años."); //  "Hola Juan tienes 30 años."

// 4. Con concat()
let mensaje4 = "Hola ".concat(nombre).concat(", bienvenido.");
console.log(mensaje4); // "Hola Juan, bienvenido."
