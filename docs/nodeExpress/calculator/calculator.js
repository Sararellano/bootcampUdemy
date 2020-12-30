const express = require('express'),
  app = express();

// TODO: 3. Ya hemos guardado los datos, pero ahora tenemos que procesarlos (hacer la función) y volver a enviarlos al server
// Nos instalamos otro paquete NPM: body parser -> npm install body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // en vez de urlencoded podemos decir que nos pase la info en JSON (.json())

// TODO: 2. Response
app.get('/', function (request, response) {

  // Respone SEND FILE: https://expressjs.com/en/4x/api.html#res.send
  // Mando un archivo al server (desde la página que pongo en el arg): ahora mismo el server es mi PC, pero cuando lo subo a internet, el server es de otra persona
  // como no sé la locaclización qeu tendrá mi archivo en el server de otro PC, ponemos: "console.log(__dirname)" (en vez de una ruta relativa) y me dice la ubicación del archivo donde estoy
  //  me dice que la ruta es: /home/sara/Tutos/BootcampUdemy/nodeExpress/calculator

  // console.log(__dirname)

  response.sendFile(__dirname + '/index.html') // ponemos __dirname para coger la ruta desde cualquier PC (de cualquier server)
});

// Si no añadimos un POST, da un 404
app.post('/', function (request, response) {

  var number1 = Number(request.body.num1); // num1 is name of form (look index.html)
  var number2 = Number(request.body.num2);
  var result = num1 + num2;

  response.send('The result of your operation is: ' + '<strong>' + result + '</strong>')
});

// En browser, console - network - All - ponemos números y damos al botón - respuesta del localhost - Headers: status 200 and in Form Data the numbers have been saved




// TODO: 1. Call server
app.listen(3000, function () {
  console.log("Server startes on port 3000")
});