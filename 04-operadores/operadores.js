// OPERADORES EN JAVASCRIPT

// ------------------------------
// OPERADOR DE ASIGNACIÓN
// ------------------------------
const constante = "Le asigno este valor"; // El operador "=" asigna un valor a una variable

// ------------------------------
// OPERADORES ARITMÉTICOS
// ------------------------------

const suma = 2 + 2; // El + es el operador de suma
console.log("El valor de la suma es:", suma); // "El valor de la suma es: 4"

const resta = 10 - 2; // El - es el operador de resta
console.log("El valor de la resta es:", resta); // "El valor de la resta es: 8"

const multiplicacion = 2 * 5; // El * es el operador de multiplicación
console.log("El valor de la multiplicación es:", multiplicacion); // "El valor de la multiplicación es: 10"

const division = 10 / 2; // El / es el operador de división
console.log("El valor de la división es:", division); // "El valor de la división es: 5"

const exponente = 2 ** 3; // El ** es el operador de potenciación (2 elevado a 3)
console.log("El valor del exponente es:", exponente); // "El valor del exponente es: 8"

const resto = 5 % 2; // El % devuelve el resto de la división (módulo)
console.log("El resto de la división es:", resto); // "El resto de la división es: 1"

// ------------------------------
// OPERADORES DE INCREMENTO Y DECREMENTO
// ------------------------------

// Incremento (aumenta en 1)
let numero1 = 5;
console.log("Valor original:", numero1); // "Valor original: 5"
numero1++; // equivale a numero1 = numero1 + 1
console.log("Luego del incremento:", numero1); // "Luego del incremento: 6"

// Decremento (disminuye en 1)
let numero2 = 10;
console.log("Valor original:", numero2); // "Valor original: 10"
numero2--; // equivale a numero2 = numero2 - 1
console.log("Luego del decremento:", numero2); // "Luego del decremento: 9"

// ------------------------------
// OPERADORES DE COMPARACIÓN
// ------------------------------

let numero = 5;
let otroNumero = 10;

// Igualdad (compara valores, no tipos)
let resultado = numero == otroNumero; // false
console.log("¿Son iguales?", resultado); // "¿Son iguales? false"

// Igualdad estricta (compara valor y tipo)
let resultadoEstricta = numero === otroNumero; // false
console.log("¿Son estrictamente iguales?", resultadoEstricta); // "¿Son estrictamente iguales? false"

// Desigualdad (compara solo valor)
let distinto = numero != otroNumero; // true
console.log("¿Son diferentes?", distinto); // "¿Son diferentes? true"

// Desigualdad estricta (valor y tipo)
let distintoEstricta = numero !== otroNumero; // true
console.log("¿Son estrictamente diferentes?", distintoEstricta); // "¿Son estrictamente diferentes? true"

// ------------------------------
// MAYOR, MENOR, MAYOR/IGUAL, MENOR/IGUAL
// ------------------------------

let numero3 = 5;
let otroNumero3 = 10;

let mayor = numero3 > otroNumero3; // false
let menor = numero3 < otroNumero3; // true
let mayorIgual = numero3 >= otroNumero3; // false
let menorIgual = numero3 <= otroNumero3; // true

console.log("¿Mayor?", mayor); // "¿Mayor? false"
console.log("¿Menor?", menor); // "¿Menor? true"
console.log("¿Mayor o igual?", mayorIgual); // "¿Mayor o igual? false"
console.log("¿Menor o igual?", menorIgual); // "¿Menor o igual? true"

// ------------------------------
// OPERADORES LÓGICOS
// ------------------------------

// AND (&&) → ambas condiciones deben ser verdaderas
let resultadoAND = 5 < 10 && 2 > 3; // true && false → false
console.log("Resultado de AND:", resultadoAND); // "Resultado de AND: false"

// OR (||) → al menos una condición debe ser verdadera
let edad = 17;
let resultadoOR = edad === 18 || edad === 30; // false || false → false
console.log("Resultado de OR:", resultadoOR); // "Resultado de OR: false"

// NOT (!) → niega el valor booleano
let documentacion = true;
console.log("¿Tiene documentación? (valor original):", documentacion); // "¿Tiene documentación? (valor original): true"
console.log("Negado con NOT:", !documentacion); // "Negado con NOT: false"
