var nombre
var lenfavorito

function holaLenguaje() {
  const nombre = process.env.USERNAME;
  const lenfavorito = process.env.WORKFLOW;
  console.log(`¡Hola, ${nombre} desde GitHub Actions!`);
  console.log(`Estoy Usando mi Lenguaje Favorito ${lenfavorito}`);
}

holaLenguaje();
