const express = require('express'),
  bodyParser = require('body-parser'),
  request = require('request'),
  https = require('https'),
  app = express();


app.use(bodyParser.urlencoded({ extended: true }));


// Creamos una carpeta nueva (public) para meter todos los assets nuestros. Sino, no los carga
// Al llamarlos desde el HTML es como si estuvieramos dentro ya de "public" folder
app.use(express.static('public'))


app.get('/', function (req, res) {
  res.sendFile(__dirname + "/signup.html")
});

app.post('/', function (req, res) {

  const firstName = req.body.Fname,
    lastName = req.body.Lname,
    email = req.body.email;

  // Creamos JSON con los datos que pide Mailchimp
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fileds: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  }

  const jsonData = JSON.stringify(data);

  // URL mailchimp
  const url = 'https://us7.api.mailchimp.com/3.0/lists/8cbb4970cd';

  const options = {
    method: 'POST',
    auth: 'sararellano:4682a4a7cdbbadb247b36ba0bb5ad6ff-us7'
  }

  const request = https.request(url, options, function (response) {

    if (response.statusCode === 200) {
      res.sendFile(__dirname + '/success.html')
    } else {
      res.sendFile(__dirname + '/failure.html')
    }

    response.on('data', function (data) {
      console.log(JSON.parse(data));
    })
  });

  request.write(jsonData);
  request.end();



  // API key
  // 4682a4a7cdbbadb247b36ba0bb5ad6ff-us7

  // lIst ID
  // 8cbb4970cd
});



// Para web failure.html -> redirige a la principal
app.post('/failure', function (req, res) {
  res.redirect('/');
})



// ponemos el server de HEROKU (free server) y el local (3000)
app.listen(process.env.PORT || 3000, function () {
  console.log('Server is running on Heroku server and in 3000 (local)')
});