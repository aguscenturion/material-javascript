// CONTROL DE FLUJO: SALTOS
// Estas instrucciones permiten alterar el flujo normal de ejecución.

// -------------------------------
// BREAK
// -------------------------------
// Se utiliza para salir de un bucle antes de que finalice naturalmente.

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("🚫 Se encontró el número 5. Se rompe el bucle.");
    break; // Sale del bucle completamente
  }
  console.log("🔁 Número:", i);
}

// También se usa en switch para evitar que se ejecuten todos los casos

// -------------------------------
// CONTINUE
// -------------------------------
// Se utiliza para *saltar* la iteración actual del bucle y continuar con la siguiente

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("⏭️ Salto el número 3");
    continue; // Salta lo que queda de esta iteración
  }
  console.log("✅ Número válido:", i);
}

// -------------------------------
// RETURN
// -------------------------------
// Se utiliza en funciones para devolver un valor o salir de la función anticipadamente

function saludar(nombre) {
  if (!nombre) {
    console.log("⚠️ Nombre no válido");
    return; // Sale de la función si no se proporciona nombre
  }
  return `Hola, ${nombre}!`; // Devuelve un saludo si todo está bien
}

console.log(saludar("Ana")); // Hola, Ana!
console.log(saludar("")); // ⚠️ Nombre no válido
