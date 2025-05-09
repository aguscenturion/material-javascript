// ------------------------------------
// SCOPE EN JAVASCRIPT
// El "scope" (alcance de las variables, disponibilidad de las variables, ambito de las variables) define desde dónde se puede acceder a una variable.
// ------------------------------------

// ------------------------------------
// SCOPE GLOBAL
// ------------------------------------

// Una variable declarada fuera de cualquier función o bloque es de alcance global
let variableGlobal = "Soy global";

function mostrarGlobal() {
  console.log("Desde la función:", variableGlobal); // ✅ Se puede acceder
}

mostrarGlobal();
console.log("Desde fuera también:", variableGlobal); // ✅ También accesible

// ------------------------------------
// SCOPE LOCAL (DENTRO DE UNA FUNCIÓN)
// ------------------------------------

function ejemploLocal() {
  let variableLocal = "Solo existo dentro de esta función";
  console.log("Desde dentro de la función:", variableLocal); // ✅ Accesible
}

ejemploLocal();
// console.log(variableLocal); // ❌ Error: variableLocal no está definida fuera

// ------------------------------------
// SCOPE DE BLOQUE (if, for, while, etc.)
// ------------------------------------

if (true) {
  let enBloque = "Estoy dentro de un if";
  console.log("Dentro del bloque if:", enBloque); // ✅ Accesible dentro del bloque
}
// console.log(enBloque); ❌ Error: no se puede acceder fuera del bloque

// Con var (NO recomendado)
if (true) {
  var conVar = "Var ignora el bloque";
  console.log("Dentro del bloque con var:", conVar);
}
console.log("Fuera del bloque con var:", conVar); // ⚠️ Sí se puede acceder, var NO respeta el scope de bloque

// ------------------------------------
// DIFERENCIA ENTRE LET Y VAR EN BLOQUES
// ------------------------------------

for (let i = 0; i < 1; i++) {
  let mensajeLet = "Let dentro de for";
  var mensajeVar = "Var dentro de for";
  console.log(mensajeLet); // ✅
}

console.log(mensajeVar); // ✅ Var escapa del bloque
// console.log(mensajeLet); ❌ Let está limitado al bloque del for
