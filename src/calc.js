import readlineSync from 'readline-sync';

function generarPregunta() {
  const operadores = ['+', '-', '*'];
  const numero1 = Math.floor(Math.random() * 50) + 1;
  const numero2 = Math.floor(Math.random() * 50) + 1;
  const operador = operadores[Math.floor(Math.random() * operadores.length)];

  let resultado;
  switch (operador) {
    case '+':
      resultado = numero1 + numero2;
      break;
    case '-':
      resultado = numero1 - numero2;
      break;
    case '*':
      resultado = numero1 * numero2;
      break;
  }

  return {
    pregunta: `${numero1} ${operador} ${numero2}`,
    respuestaCorrecta: resultado
  };
}

export function brainCalc() {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  console.log('¿Cuál es el resultado de la expresión?');

  for (let i = 0; i < 3; i++) {
    const { pregunta, respuestaCorrecta } = generarPregunta();

    console.log(`Pregunta: ${pregunta}`);
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