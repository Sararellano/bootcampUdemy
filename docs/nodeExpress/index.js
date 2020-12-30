// NOde Express es un framework para NODE JS, hecho con JS y jQuery para ayudarte a organizar tu código, sobre todo para web apps (hechas con node)

// Node: destornillador
// Node Express: destornillador eléctrico (hace lo mismo, pero más rapido y con menos esfuerzo). Escribes menos código

// -----------------

// Instalar SERVIDOR:
// 1. npm init
// 2. Instalar node express: https://expressjs.com/  (npm install express)
// 3. ponerlo como requerido:
const express = require('express'),
  app = express();

// Dices lo que recibe el server y lo que da:
// 1º parametro: la página donde ocurrirá (si pones '/' es la principal)
// 2º la función que hará
app.get('/', function (request, response) {
  response.send("<h1> Hello world! </h1>")
});

// Crear otra página: localhost:3000/contact
app.get('/contact', function (request, response) {
  response.send("contact me at: sara.arellano@selectra.info")
});

// Crear otra página: localhost:3000/about
app.get('/about', function (request, response) {
  response.send("Personal information about me")
});

// Crear otra página: localhost:3000/hobbies
app.get('/hobbies', function (request, response) {
  response.send("<ul><li> Coffe </li> <li> Read </li> <li> Walk </li> <li> Animals </li> </ul>")
});





// Dices que escuche al puerto que quieras (por ejemplo el 3000). La function es opctional.
app.listen(3000, function () {
  console.log("Server startes on port 3000")
});

// 4. en consola: node index.js (para pararlo: ctrl + C)
// 5. Vamos a localhost:3000 


// ----------------

// NODEMON: para no parar y volver a poner el server: nos instalamos NODEMON: https://nodemon.io/ 
// luego ponemos en la consola: nodemon