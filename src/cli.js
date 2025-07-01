import readlineSync from "readline-sync";

export function sayHiToUser()
{
    console.log('¡Bienvenido a Brain Games!');
    const name = readlineSync.question("¿Cual es tu nombre?: ");
    console.log(`¡Hola, ${name}!`);
}

