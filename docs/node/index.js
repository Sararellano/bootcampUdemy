// Para usar el File System module de NODE JS
// File system module: agregamos una variable y decimos que el FileSystem es requerido
const fs = require("fs");

// Ahora se pueden llamar a los métodos NATIVOS de Node: https://nodejs.org/api/fs.html

// Copiar archivos (el que quieres copiar, archivo donde quieres copiar el otro). Si hay algo escrito en el 1º, lo borra
fs.copyFileSync('file1.txt', 'file2.txt');
// Para ejecutar esto: en console, dentro de la carpeta, pones: node index.js



// También hay módules EXTERNOS, y para gestionarlos, usamos: NPM
// Los módules externos están hechos por cualquiera y los puedes usar y tú mismo puedes crear uno nuevo

// cuando instalas NODE ya instalas NPM

// NPM: npmjs.com: te vienen todos los paquetes que hay
// para iniciarlo haces: npm init, pones las cosas y te crea un PACKAGE.JSON

// Buscamos un paquete en npmjs.com: Superhero names: https://www.npmjs.com/package/superheroes
// INSTALAMOS (local): npm install superheroes --> y se pone como dependencia en el package.json

const superheroes = require("superheroes");

var mySuperheroName = superheroes.random();

console.log(mySuperheroName); // y pones en consola node index.js


// SuperVillains: https://www.npmjs.com/package/supervillains
// INSTALL: npm install supervillains
const supervillains = require('supervillains');

var mySupervillainName = supervillains.random();

console.log(mySupervillainName); // y pones en consola node index.js