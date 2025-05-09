// OBJETO DATE EN JAVASCRIPT
// Sirve para trabajar con fechas y horas

// 🔹 Crear una fecha actual
const fechaActual = new Date();
console.log("Fecha actual:", fechaActual);

// 🔹 Crear una fecha específica (año, mes, día)
// ⚠️ El mes empieza en 0 (enero), así que 4 es mayo
const fechaNacimiento = new Date(1995, 4, 15);
console.log("Fecha de nacimiento:", fechaNacimiento);

// 🔹 Crear desde string
const fechaDesdeTexto = new Date("2023-12-25");
console.log("Fecha desde string:", fechaDesdeTexto);

// 🔹 Obtener partes de la fecha
console.log("Año:", fechaActual.getFullYear());
console.log("Mes (0-11):", fechaActual.getMonth());
console.log("Día del mes:", fechaActual.getDate());
console.log("Día de la semana (0-Domingo):", fechaActual.getDay());
console.log("Hora:", fechaActual.getHours());
console.log("Minutos:", fechaActual.getMinutes());

// 🔹 Timestamp (milisegundos desde 1 enero 1970)
console.log("Timestamp:", fechaActual.getTime());

// 🔹 Convertir a string legible
console.log("toDateString:", fechaActual.toDateString());
console.log("toLocaleDateString:", fechaActual.toLocaleDateString());
console.log("toISOString:", fechaActual.toISOString());

// 🔹 Comparar fechas
const hoy = new Date();
const mañana = new Date();
mañana.setDate(hoy.getDate() + 1);

console.log("¿Mañana es después de hoy?", mañana > hoy); // true
