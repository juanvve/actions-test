var nombre

function holaMundo() {
  const nombre = process.env.USERNAME;
  console.log(process.env)
  console.log(`¡Hola, ${nombre} desde GitHub Actions!`);
}

holaMundo();
