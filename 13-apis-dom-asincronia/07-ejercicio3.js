function numeroAleatorio() {
  return new Promise(resolve => {
    const num = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => resolve(num), 1000);
  });
}

async function mostrarNumero() {
  const numero = await numeroAleatorio();
  console.log("Número aleatorio:", numero);
}

mostrarNumero();