// CONVERSIONES DE TIPO EN JAVASCRIPT

// 🔸 1. CONVERSIÓN IMPLÍCITA (Coerción)
// Ocurre automáticamente cuando JavaScript intenta convertir tipos diferentes para operar

// ➕ Suma de número y string → el número se convierte a string
let resultado1 = 5 + "10"; // "510" (número 5 se convierte en string)
console.log("Resultado 1 (5 + '10'):", resultado1);

// ➖ Resta de string y número → el string se convierte a número
let resultado2 = "10" - 2; // 8
console.log("Resultado 2 ('10' - 2):", resultado2);

// ✖️ Multiplicación de strings numéricos
let resultado3 = "4" * "2"; // 8
console.log("Resultado 3 ('4' * '2'):", resultado3);

// ❗ Comparaciones flexibles (==) → también hacen conversión implícita
console.log("Resultado 4 (false == 0):", false == 0); // true
console.log("Resultado 5 ('' == 0):", "" == 0); // true

// ⚠️ Estas conversiones pueden causar confusión. Se recomienda usar ===

// 🔸 2. CONVERSIÓN EXPLÍCITA (CASTING)
// Usamos funciones o métodos para convertir tipos manualmente

// ✅ String a Número
let cadena = "123";
let numero1 = Number(cadena); // 123 (como número)
let numero2 = parseInt(cadena); // 123 (entero)
let numero3 = parseFloat("123.45"); // 123.45

console.log("String a Number:", numero1);
console.log("parseInt:", numero2);
console.log("parseFloat:", numero3);

// ✅ Número a String
let num = 456;
let texto1 = String(num); // "456"
let texto2 = num.toString(); // "456"

console.log("Número a String:", texto1);
console.log("toString:", texto2);

// ✅ Booleanos
console.log("Boolean(Number(0)):", Boolean(Number(0))); // false
console.log("Boolean('Hola'):", Boolean("Hola")); // true
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean(null):", Boolean(null)); // false

// ✅ Conversión rápida con operador +
let rapido = +"42"; // convierte string a número
console.log("Conversión rápida con +:", rapido);

// ✅ Con doble negación (!!) para convertir a booleano
let valor = "algo";
console.log("Boolean con !!:", !!valor); // true

// ⚠️ Usar conversión explícita siempre que sea posible para evitar errores inesperados

// MÉTODO toFixed() EN JAVASCRIPT
// Se usa para limitar la cantidad de decimales de un número

const numero = 12.34567;

// 🔹 Limitar a 2 decimales
const conDosDecimales = numero.toFixed(2); // "12.35"
console.log("Con 2 decimales:", conDosDecimales);

// 🔹 Limitar a 0 decimales (redondea)
console.log("Redondeado sin decimales:", numero.toFixed(0)); // "12"

// 🔹 El resultado es un STRING
console.log("Tipo de resultado:", typeof conDosDecimales); // string

// 🔹 Convertir de nuevo a número (si se necesita operar)
const comoNumero = parseFloat(conDosDecimales) + 1;
console.log("Suma +1:", comoNumero);

// 🔹 Usos comunes: mostrar precios, porcentajes, etc.
let precio = 19.999;
console.log("Precio:", precio.toFixed(2)); // "20.00"

// 🔹 ¡Cuidado! Redondea, no solo recorta
console.log((2.005).toFixed(2)); // "2.01" (redondea hacia arriba)
