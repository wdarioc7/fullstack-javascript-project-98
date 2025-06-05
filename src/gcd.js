import readlineSync from 'readline-sync';

// Función para calcular el MCD usando el algoritmo de Euclides
function calcularMCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Juego principal
export function brainGCD() {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  console.log('Encuentra el máximo común divisor de los números dados.');

  for (let i = 0; i < 3; i++) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;

    const respuestaCorrecta = calcularMCD(num1, num2);

    console.log(`Pregunta: ${num1} ${num2}`);
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
