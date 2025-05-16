function verificarStock(producto) {
  return new Promise((resolve, reject) => {
    if (producto === "laptop") {
      resolve("Stock disponible");
    } else {
      reject("Producto no disponible");
    }
  });
}

verificarStock("laptop")
  .then(console.log)
  .catch(console.error);