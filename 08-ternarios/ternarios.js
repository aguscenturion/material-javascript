// OPERADOR TERNARIO vs IF-ELSE
// Misma lógica con if-else y con operador ternario

// 🔸 EJEMPLO: verificar si un usuario tiene edad suficiente para entrar a una fiesta

let edad = 20;

// ✔️ Usando IF - ELSE
if (edad >= 18) {
  console.log("✅ Puede entrar a la fiesta");
} else {
  console.log("🚫 No puede entrar, es menor de edad");
}

// ✔️ Usando OPERADOR TERNARIO
// Sintaxis: condicion ? resultado_si_verdadero : resultado_si_falso
console.log(
  edad >= 18
    ? "✅ Puede entrar a la fiesta"
    : "🚫 No puede entrar, es menor de edad"
);

// 🔸 Otro ejemplo: asignar mensaje según si el usuario está logueado o no

let estaLogueado = false;

// Con IF - ELSE
let mensaje1;
if (estaLogueado) {
  mensaje1 = "Bienvenido de nuevo";
} else {
  mensaje1 = "Por favor, inicia sesión";
}
console.log("IF-ELSE:", mensaje1);

// Con TERNARIO
let mensaje2 = estaLogueado
  ? "Bienvenido de nuevo"
  : "Por favor, inicia sesión";
console.log("TERNARIO:", mensaje2);

// 🔸 Otro ejemplo: mostrar si un número es positivo, negativo o cero
let numero = -5;

// Con IF - ELSE
let resultado1;
if (numero > 0) {
  resultado1 = "Positivo";
} else if (numero < 0) {
  resultado1 = "Negativo";
} else {
  resultado1 = "Cero";
}
console.log("IF-ELSE:", resultado1);

// Con TERNARIO anidado
let resultado2 = numero > 0 ? "Positivo" : numero < 0 ? "Negativo" : "Cero";
console.log("TERNARIO:", resultado2);

// ⚠️ Ternarios anidados pueden volverse confusos.
// Si hay muchas condiciones, es preferible usar if-else o switch para mejor legibilidad.
