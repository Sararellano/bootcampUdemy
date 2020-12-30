const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (request, response) {

  response.sendFile(__dirname + '/index.html')
});

app.post('/', function (request, response) {

  var weight = parseFloat(request.body.weight); // parseFloat to use decimals
  var height = parseFloat(request.body.height);
  var result = weight / (height * height);

  if (result < 18) {
    response.send('Your weight is below what it should. Your BMI is: ' + '<strong>' + result + '</strong>')

  } else if (result > 18 && result < 25) {
    response.send('Your BMI is perfect! : ' + '<strong>' + result + '</strong>')
  } else {
    response.send('Your weight is excessive. Your BMI is : ' + '<strong>' + result + '</strong>')
  }

});


app.listen(3000, function () {
  console.log("Server startes on port 3000")
});