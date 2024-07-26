var nombre
var lenfavorito

function holaLenguaje() {
  const nombre = process.env.NAME;
  const lenfavorito = process.env.LANGUAGE;
  console.log(`¡Hola, ${nombre} desde GitHub Actions!`);
  console.log(`Estoy Usando mi Lenguaje Favorito ${lenfavorito}`);
  console.log(process.env);
}

holaLenguaje();
