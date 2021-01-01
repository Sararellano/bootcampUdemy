const express = require('express'),
  https = require('https'),
  bodyParser = require('body-parser'),
  app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {


  res.sendFile(__dirname + '/index.html');


});

app.post('/', function (req, res) {

  // Recibo lo que haya escrito el user en el input
  console.log(req.body.cityName);

  // Hacemos request GET de una URL externa (se puede hacer con modules externos, como HTTP module). Nosotros lo hacemos de forma nativa
  const query = req.body.cityName,
    apiKey = "4f854cbc4d525735242ffb3ca675f5f3",
    units = "metric",
    urlWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;

  https.get(urlWeather, function (response) {
    console.log(response.statusCode); // 200 OK

    response.on('data', function (data) {
      const weatherData = JSON.parse(data),
        temp = weatherData.main.temp,
        tempLike = weatherData.main.feels_like,
        weatherDescription = weatherData.weather[0].description,
        icon = weatherData.weather[0].icon,
        iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      // Sólo podemos poner 1 .send(), pero podemos poner antes muchos .write()
      res.write('<h1>The temperature in ' + query + ' is ' + temp + "degrees Celcius. But it feels like: " + tempLike + "degrees Celcius.</h1>")
      res.write('<p>The weater is currenly ' + weatherDescription + '</p>')
      res.write('<img alt="icon weather" src=' + iconURL + '/>')

      res.send();
    })
  })

})




app.listen(3000, function () {
  console.log('Server is running on port 3000')
})