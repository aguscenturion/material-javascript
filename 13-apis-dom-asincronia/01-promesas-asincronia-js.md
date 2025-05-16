# Promesas y Asincronía en JavaScript

## 1. ¿Qué es la asincronía y por qué es importante?

### Síncrono vs Asíncrono

- **Código síncrono**: cada línea se ejecuta una después de otra. Si una tarea tarda mucho (como acceder a un servidor), **bloquea** el resto del código.
- **Código asíncrono**: permite ejecutar tareas que **toman tiempo** (como leer archivos o consultar APIs) sin detener el flujo del programa.

### ¿Qué problema resuelve?
Evita que la aplicación “se congele” o quede inactiva mientras espera que una operación larga finalice (como cargar una imagen, hacer una petición a internet, leer una base de datos, etc.).

---

## 2. Evolución de las soluciones asincrónicas

### 2.1 Callbacks (funciones de retorno)

```javascript
function leerArchivo(callback) {
  setTimeout(() => {
    callback("Contenido del archivo");
  }, 1000);
}

leerArchivo(function (contenido) {
  console.log(contenido); // Se ejecuta después de 1 segundo
});
```

**Problema**: Cuando hay múltiples operaciones anidadas, se genera el **callback hell**.

### 2.2 Promesas

```javascript
const promesa = new Promise((resolve, reject) => {
  let exito = true;

  if (exito) {
    resolve("Operación exitosa");
  } else {
    reject("Algo salió mal");
  }
});

promesa
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error));
```

### 2.3 Async/Await

```javascript
async function ejemplo() {
  try {
    const resultado = await promesa;
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
}
```

---

## 3. Casos de uso comunes

| Caso                          | ¿Por qué se usa asincronía?                                       |
|------------------------------|------------------------------------------------------------------|
| Acceder a una API externa     | Las respuestas de la red toman tiempo.                          |
| Leer archivos del sistema     | Evita bloquear la app mientras se lee un archivo grande.       |
| Esperar acciones del usuario  | Por ejemplo, un clic o ingreso de datos.                        |
| Cargar imágenes o recursos    | Algunas pueden demorar; mientras tanto, se muestra un loader.   |

---

## 4. Ejemplos conceptuales

### Simulando un retardo con Promesas

```javascript
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

esperar(2000).then(() => console.log("Pasaron 2 segundos"));
```

### Simulación de consulta a servidor

```javascript
function pedirDatosDelServidor() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Datos del servidor");
    }, 1500);
  });
}

async function mostrarDatos() {
  const datos = await pedirDatosDelServidor();
  console.log("Recibido:", datos);
}

mostrarDatos();
```

---

## 5. Buenas prácticas

- Siempre manejar errores (`.catch()` o `try/catch` con `async/await`).
- No mezclar `then()` con `await`.
- Reutilizar funciones que devuelven Promesas para mantener un código limpio y modular.

---

## 6. Ejercicios para clase

### Nivel 1 – Promesas básicas

1. Crea una función `tareaAsincronica()` que devuelva una Promesa y se resuelva después de 2 segundos con el mensaje “Proceso finalizado”.
2. Simula una función que consulte si un usuario está logueado y resuelva con “Bienvenido” o rechace con “Acceso denegado”.

### Nivel 2 – async/await

3. Usando `async/await`, espera la respuesta de una función asincrónica que retorne un número aleatorio entre 1 y 10, y muéstralo por consola.
4. Simula una secuencia: 
   - Esperar 1 segundo → mostrar “Cargando datos…”
   - Esperar 2 segundos → mostrar “Procesando…”
   - Esperar 1 segundo → mostrar “Listo ✅”

### Nivel 3 – Integración

5. Simula una función que consulte una API falsa (`https://jsonplaceholder.typicode.com/posts/1`) y muestre el título del post.
6. Implementa una función `verificarStock(producto)` que, si el producto es "laptop", devuelve una Promesa resuelta con “Stock disponible”, de lo contrario se rechaza con “Producto no disponible”.

---

## 7. Recursos para seguir aprendiendo
- [MDN: Usar promesas en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises)
- [Artículo: Callbacks, Promesas y Async/Await](https://www.freecodecamp.org/espanol/news/javascript-asincrono-explicacion-de-callbacks-promesas-y-async-await/)