import readlineSync from 'readline-sync';

let streak = 0;

export function esPar() {
 
  while (true) {
    const numero = Math.floor(Math.random() * 100) + 1;
    console.log(`Pregunta: ${numero}`);

    const respuesta = readlineSync.question('Responde "yes" si el número es par, de lo contrario responde "no". ').toLowerCase();

    const esPar = numero % 2 === 0;
    const esCorrecto = (esPar && respuesta === 'yes') || (!esPar && respuesta === 'no');

    if (esCorrecto) {
      console.log(`Tu respuesta: ${respuesta }`);
      streak++;
    } else {
      console.log(`'yes' es una respuesta incorrecta ;(. La respuesta correcta era '${esPar ? 'yes' : 'no'}'.`);
      console.log(`¡Intentémoslo de nuevo!`);
      //console.log(`Tu racha fue de ${streak} aciertos.`);
      break;
    }

    if (streak >= 3) {
      console.log(`¡Felicidades!, Bill!`);
      break;
    }

    //console.log(`Tu racha actual es de ${streak} aciertos.`);

    const continuar = readlineSync.question('¿Quieres seguir jugando? (yes/no): ').toLowerCase();
    if (continuar !== 'yes') {
      console.log(`Tu racha final fue de ${streak} aciertos.`);
      break;
    }
  }
}
