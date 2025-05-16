function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function secuencia() {
  await esperar(1000);
  console.log("Cargando datos...");
  await esperar(2000);
  console.log("Procesando...");
  await esperar(1000);
  console.log("Listo ✅");
}

secuencia();