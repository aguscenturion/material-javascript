async function consultarPost() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const datos = await respuesta.json();
    console.log("Título del post:", datos.title);
  } catch (error) {
    console.error("Error en la consulta:", error);
  }
}

consultarPost();