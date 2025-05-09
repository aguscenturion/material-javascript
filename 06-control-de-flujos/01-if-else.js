// IF - ELSE
// Se utiliza para tomar decisiones condicionales.

// Si la condición se cumple (true), se ejecuta el bloque de código del "if".
// Si no se cumple, se ejecuta el "else" (opcional).

let edad = 20;

if (edad >= 18) {
  console.log("✅ Es mayor de edad"); // Este bloque se ejecuta si la edad es mayor o igual a 18
} else {
  console.log("🚫 Es menor de edad");
}

// IF - ELSE IF - ELSE
// Se usa cuando hay múltiples condiciones posibles

let nota = 7;

if (nota >= 9) {
  console.log("🏆 Excelente");
} else if (nota >= 6) {
  console.log("👍 Aprobado");
} else {
  console.log("❌ Reprobado");
}
