// SWITCH
// Ideal cuando tenemos que comparar una variable con varios posibles valores.
// Es más limpio que usar muchos "else if".

let dia = "martes";

switch (dia) {
  case "lunes":
    console.log("☕ Es lunes, café por favor");
    break;
  case "martes":
    console.log("💪 Es martes, vamos con energía");
    break;
  case "miércoles":
    console.log("🧠 Mitad de semana");
    break;
  case "jueves":
    console.log("📚 Jueves productivo");
    break;
  case "viernes":
    console.log("🎉 Viernes, casi fin de semana");
    break;
  default:
    console.log("❓ Día no reconocido"); // Se ejecuta si no coincide ningún caso
}
