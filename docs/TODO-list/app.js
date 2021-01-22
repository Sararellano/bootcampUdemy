const express = require('express'),
  bodyParser = require('body-parser'),
  // Our module: date.js
  date = require(__dirname + '/date.js'),
  app = express();

// console.log(date());

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

// Para añadir el css, lo meto en la carpeta 'public'
app.use(express.static('public'));

const items = ['Buy food', 'Cook food', 'Eat food'];
const workItems = [];

app.get('/', function (req, res) {

  // Esto lo metemos en nuestro módulo propio: date.js y lo importamos aquí con Nose.js
  // Si es weekend or weekday
  // const today = new Date(),
  //   options = {
  //     weekday: 'long',
  //     day: 'numeric',
  //     month: 'long'
  //   },
  //   day = today.toLocaleDateString('en-US', options);
  const day = date.getDate();



  // Así se manda un archivo HTML. Pero lo vamos a hacer con EJS, y es res.render
  // res.sendFile(__dirname + "/weekday.html")
  // Sólo se puede agregar 1 res.send, así que si quieres agregar más, pones res.write
  // Se le pasan todas las variables que vayamos a necesitar en list.ejs
  res.render('list', { listTitle: day, newListItems: items })

});

// FORM
app.post('/', function (req, res) {

  // Coger valor del input para pintarlo en la lista
  const item = req.body.newItem;

  // Si es la página de work, mete los elementos items en el form de work, sino, en home
  if (req.body.list === 'Work') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }


});

// Add Work page
app.get('/work', function (req, res) {
  res.render('list', { listTitle: 'Work List', newListItems: workItems });
});

app.post('/work', function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);

  res.redirect('/work');

});


// Add about page
app.get('/about', function (req, res) {
  res.render('about');
});


app.listen(3000, function () {
  console.log('Server is running on port 3000')
});