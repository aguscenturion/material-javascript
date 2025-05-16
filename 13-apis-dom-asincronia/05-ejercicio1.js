function tareaAsincronica() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Proceso finalizado");
    }, 2000);
  });
}

tareaAsincronica().then(console.log);