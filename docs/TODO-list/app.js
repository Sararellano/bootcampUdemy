const express = require('express'),
  bodyParser = require('body-parser'),
  // Our module: date.js lo borramos porque lo haremos con Mongoose
  // date = require(__dirname + '/date.js'),
  mongoose = require('mongoose'),
  _ = require('lodash'),
  app = express();

// console.log(date());

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

// Para añadir el css, lo meto en la carpeta 'public'
app.use(express.static('public'));

// Los borramos y los agregamos con MongooseDB
// const items = ['Buy food', 'Cook food', 'Eat food'];
// const workItems = [];

mongoose.connect('mongodb://localhost:27017/todolistDB', { useNewUrlParser: true });
// Creamos schema
const itemsSchema = {
  name: String
};

const Item = mongoose.model('Item', itemsSchema);

const item1 = new Item({
  name: 'Welcome to your todolist!'
});

const item2 = new Item({
  name: 'Hit the + button to add a new item.'
});

const item3 = new Item({
  name: '>-- Hit this to delete an item.'
});

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model('List', listSchema);



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

  // Lo borramos porque lo vamos a hacer con Mongoose
  // const day = date.getDate();


  // Así se manda un archivo HTML. Pero lo vamos a hacer con EJS, y es res.render
  // res.sendFile(__dirname + "/weekday.html")
  // Sólo se puede agregar 1 res.send, así que si quieres agregar más, pones res.write
  // Se le pasan todas las variables que vayamos a necesitar en list.ejs

  // llamamos a mongo
  Item.find({}, function (err, foundItems) {

    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('Successfully saved default items to DB');
        }
      });
      res.redirect('/');
    } else {
      res.render('list', { listTitle: 'Today', newListItems: foundItems });
    }
  });

});

app.get('/:customListName', function (req, res) {
  const customListName = _.capitalize(req.params.customListName);

  List.findOne({ name: customListName }, function (err, foundList) {
    if (!err) {
      if (!foundList) {
        // Create a new list
        const list = new List({
          name: customListName,
          items: defaultItems
        });

        list.save();
        res.redirect('/' + customListName)

      } else {
        // show an existing list
        res.render('list', { listTitle: foundList.name, newListItems: foundList.items });

      }
    }
  });


});




// FORM
app.post('/', function (req, res) {

  // Coger valor del input para pintarlo en la lista
  // const item = req.body.newItem;

  // Si es la página de work, mete los elementos items en el form de work, sino, en home
  // if (req.body.list === 'Work') {
  //   workItems.push(item);
  //   res.redirect('/work');
  // } else {
  //   items.push(item);
  //   res.redirect('/');
  // }


  const itemName = req.body.newItem,
    listName = req.body.listBtn,
    item = new Item({
      name: itemName
    });

  if (listName === 'Today') {
    item.save();
    res.redirect('/');

  } else {
    List.findOne({ name: listName }, function (err, foundList) {
      foundList.items.push(item);
      foundList.save();
      res.redirect('/' + listName);
    });

  }


});

// delete items in homepage
app.post('/delete', function (req, res) {
  const checkedItemId = req.body.checkboxItem,
    listName = req.body.listName;

  if (listName === 'Today') {
    Item.findByIdAndRemove(checkedItemId, function (err) {
      if (!err) {
        console.log('Successfully checked item deleted');
        res.redirect('/');
      }
    });

  } else {
    List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: checkedItemId } } }, function (err, foundList) {
      if (!err) {
        res.redirect('/' + listName);
      }
    });

  }

});






// Add about page
app.get('/about', function (req, res) {
  res.render('about');
});


app.listen(3000, function () {
  console.log('Server is running on port 3000')
});