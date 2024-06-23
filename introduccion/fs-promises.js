const fs = require('node:fs/promises');
const { text } = require('stream/consumers');

console.log("Primer archivo:")
fs.readFile('./archivo.txt', 'utf-8').then(text => console.log(text));

console.log('--> Ejecuntado otras cosas')

console.log("Segundo archivo:")
fs.readFile('./archivo2.txt', 'utf-8').then(text => console.log(text));