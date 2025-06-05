import readlineSync from 'readline-sync';

// Función para generar una progresión aritmética
function generarProgresion(longitud = 10, inicio = 1, paso = 2) {
  return Array.from({ length: longitud }, (_, i) => inicio + i * paso);
}

// Juego principal
export function brainProgression() {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  console.log('¿Qué número falta en la progresión?');

  for (let i = 0; i < 3; i++) {
    const longitud = 10;
    const inicio = Math.floor(Math.random() * 20) + 1; // entre 1 y 20
    const paso = Math.floor(Math.random() * 5) + 1;     // entre 1 y 5
    const progresion = generarProgresion(longitud, inicio, paso);

    const indiceOculto = Math.floor(Math.random() * longitud);
    const respuestaCorrecta = progresion[indiceOculto];
    const progresionConHueco = progresion.map((n, i) => (i === indiceOculto ? '..' : n)).join(' ');

    console.log(`Pregunta: ${progresionConHueco}`);
    const respuestaUsuario = readlineSync.question('Tu respuesta: ');
    const respuestaNumerica = Number(respuestaUsuario);

    if (respuestaNumerica === respuestaCorrecta) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${respuestaUsuario}' es una respuesta incorrecta ;(. La respuesta correcta era '${respuestaCorrecta}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
}
