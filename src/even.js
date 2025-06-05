import readlineSync from 'readline-sync';

let streak = 0;

export function esPar() {
  console.log('¡Bienvenidos a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre?: ');
  console.log(`¡Hola, ${name}!`);

  while (true) {
    const numero = Math.floor(Math.random() * 100) + 1;
    console.log(`El número aleatorio generado es: ${numero}`);

    const respuesta = readlineSync.question('¿Es este número par? Responde "yes" si es par, "no" si es impar: ').toLowerCase();

    const esPar = numero % 2 === 0;
    const esCorrecto = (esPar && respuesta === 'yes') || (!esPar && respuesta === 'no');

    if (esCorrecto) {
      console.log('¡Respuesta correcta!');
      streak++;
    } else {
      console.log('Respuesta incorrecta. Fin del juego.');
      console.log(`Tu racha fue de ${streak} aciertos.`);
      break;
    }

    if (streak >= 3) {
      console.log(`¡Felicidades! Has alcanzado una racha de ${streak} aciertos.`);
      break;
    }

    console.log(`Tu racha actual es de ${streak} aciertos.`);

    const continuar = readlineSync.question('¿Quieres seguir jugando? (yes/no): ').toLowerCase();
    if (continuar !== 'yes') {
      console.log(`Tu racha final fue de ${streak} aciertos.`);
      break;
    }
  }
}
