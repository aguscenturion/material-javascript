function verificarLogin(usuario) {
  return new Promise((resolve, reject) => {
    if (usuario === "admin") {
      resolve("Bienvenido");
    } else {
      reject("Acceso denegado");
    }
  });
}

verificarLogin("admin")
  .then(console.log)
  .catch(console.error);