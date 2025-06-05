import readlineSync from 'readline-sync';

//Funciòn para verificar si un número es primo
function esPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }
  return true;
}
//Función para generar una pregunta
function generarPregunta() {
  const numero = Math.floor(Math.random() * 100) + 1; // Número entre 1 y 100
  return {
    pregunta: numero,
    respuestaCorrecta: esPrimo(numero) ? 'yes' : 'no'
  };
}
//Función principal del juego
export function brainPrime() {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  console.log('Responde "yes" si el número es primo, o "no" si no lo es.');

  for (let i = 0; i < 3; i++) {
    const { pregunta, respuestaCorrecta } = generarPregunta();

    console.log(`Pregunta: ${pregunta}`);
    const respuestaUsuario = readlineSync.question('Tu respuesta: ').toLowerCase();

    if (respuestaUsuario === respuestaCorrecta) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${respuestaUsuario}' es una respuesta incorrecta ;(. La respuesta correcta era '${respuestaCorrecta}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
}