// OBJETOS EN JAVASCRIPT

// 🔹 Crear un objeto literal
let persona = {
  nombre: "Juan",
  edad: 30,
  esEstudiante: false,
  saludar: function () {
    return `Hola, soy ${this.nombre}`;
  },
};

// Acceso a propiedades
console.log(persona.nombre); // notación punto
console.log(persona["edad"]); // notación corchete

// Modificar propiedades
persona.edad = 31;
persona["esEstudiante"] = true;

// Agregar nuevas propiedades
persona.profesion = "Programador";

// Eliminar propiedades
delete persona.profesion;

// Ejecutar método
console.log(persona.saludar());

// 🔹 Recorrer propiedades
for (let clave in persona) {
  console.log(clave + ":", persona[clave]);
}

// 🔹 Object.keys() / Object.values()
// Devuelven un array con las claves o valores del objeto
console.log("Claves:", Object.keys(persona));
console.log("Valores:", Object.values(persona));

// 🔹 Desestructuración
let { nombre, edad } = persona;
console.log("Nombre desestructurado:", nombre);
