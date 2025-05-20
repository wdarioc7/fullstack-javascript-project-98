import readlineSync from "readline-sync";

export function sayHiToUser()
{
    console.log("¡Bienvenidos a Brain Games!");
    const name = readlineSync.question("Tu respuesta: ");
    console.log(`¡Hola, ${name}!`);
}

