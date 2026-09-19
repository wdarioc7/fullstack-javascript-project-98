import readlineSync from 'readline-sync';
import { sayHiToUser } from './cli.js';

const name = sayHiToUser();

export function esPar() {
  let streak = 0;
  while (streak < 3) {
    const numero = Math.floor(Math.random() * 100) + 1;
    console.log(`Pregunta: ${numero}`);
    const respuesta = readlineSync
      .question(
        'Responde "yes" si el número dado es primo. De lo contrario responde "no".',
      ).toLowerCase();
    console.log(`Tu respuesta: ${respuesta}`);
    const esParRes = numero % 2 === 0;
    const respuestaCorrecta = esParRes ? 'yes' : 'no';
    if (respuesta === respuestaCorrecta) {
      console.log('¡Correcto!');
      streak += 1;
    } else {
      console.log(`'${respuesta}' es una respuesta incorrecta ;(. La respuesta correcta era '${respuestaCorrecta}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }
  console.log(`¡Felicidades, ${name}!`);
}
