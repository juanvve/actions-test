var nombre
var flow

function holaMundo() {
  const nombre = process.env.USERNAME;
  const flow = process.env.WORKFLOW;
  console.log(`¡Hola, ${nombre} desde GitHub Actions!`);
  console.log(`Estoy corriendo ${flow}`);
}

holaMundo();
