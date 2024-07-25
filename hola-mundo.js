var nombre

function holaMundo() {
  const nombre = process.env.USERNAME;
  console.log(`¡Hola, ${nombre} desde GitHub Actions!`);
}

holaMundo();