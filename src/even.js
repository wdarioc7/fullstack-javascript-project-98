import readlineSync from 'readline-sync';
import { sayHiToUser } from './cli.js';

const name = sayHiToUser();

export function esPar() {
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  for (let i = 0; i < 3; i++) {
    const numero = Math.floor(Math.random() * 100) + 1;
    console.log(`Pregunta: ${numero}`);

    const respuesta = readlineSync.question('Tu respuesta: ').toLowerCase();

    const esParRes = numero % 2 === 0;
    const respuestaCorrecta = esParRes ? 'yes' : 'no';
    const esCorrecto = respuesta === respuestaCorrecta;

    if (esCorrecto) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${respuesta}' es una respuesta incorrecta ;(. La respuesta correcta era '${respuestaCorrecta}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
}