# Ejemplos de APIs del Navegador en JavaScript

## 1. API del DOM

```html
<p id="mensaje">Hola, mundo.</p>
<button onclick="document.getElementById('mensaje').textContent = 'Texto actualizado por DOM'">
  Cambiar texto
</button>
```

## 2. API de Eventos

```html
<button id="boton">Haz clic aquí</button>
<script>
  document.getElementById("boton").addEventListener("click", () => {
    alert("¡Has hecho clic!");
  });
</script>
```

## 3. API de Almacenamiento Local

```html
<script>
  localStorage.setItem("usuario", "Alejandro");
  const nombre = localStorage.getItem("usuario");
  console.log("Bienvenido:", nombre);
</script>
```

## 4. API de Geolocalización

```html
<button onclick="obtenerUbicacion()">Obtener ubicación</button>
<script>
  function obtenerUbicacion() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        alert(`Latitud: ${pos.coords.latitude}, Longitud: ${pos.coords.longitude}`);
      });
    } else {
      alert("Geolocalización no soportada");
    }
  }
</script>
```

## 5. API de Cámara

```html
<video autoplay playsinline id="video"></video>
<script>
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(stream => {
      document.getElementById("video").srcObject = stream;
    })
    .catch(error => console.error("Error al acceder a la cámara:", error));
</script>
```