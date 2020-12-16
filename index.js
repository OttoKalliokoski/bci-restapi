const express = require('express')
const app = express()
const port = 3000;
const timestamp = require('time-stamp');

let bodyParser = require('body-parser')
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get('/', function (req, res) {
    res.send('The Shop in the internet, THE INTERNET SHOP!')
  })
  
app.get('/api/items', (req, res) => {
    res.send(items)
  }) //API saa kaikki esineet listassa [items]

app.get('/api/users', (req, res) => {
    res.send(users)
}) //API saa kaikki käyttäjät listassa [users]

app.get('/api/items/:id', (req, res) => {
  const item = items.find(c => c.id === parseInt(req.params.id))
  if (!item) res.status(404).send('No item found')
  res.send(item)
}) //API saa tietyn, id:n määrittämän esineen listassa [items]

app.post('/api/users', (req, res) => {
  const { username, password, email } = req.body;
  if(!username) {
    res.status(400).send('Username is required');
    return;
  }
  if(!password) {
    res.status(400).send('Username is required');
    return;
  }
  if(!email) {
    res.status(400).send('Username is required');
    return;
  }

  const user = {
    id: users.length+1,
    username: username,
    email: email,
    password: password
  }
})//API postaa uuden käyttäjän

app.post('/api/items', (req, res) => {
const { username, title, description, category, location, price, deliveryType, phoneNumber } = req.body;
if(!username) {
  res.status(400).send('Username is required');
  return;
}
if (!title) {
res.status(400).send('Title is required');
return;
}
if (!description) {
res.status(400).send('Description is required');
return;
}
if (!category) {
  res.status(400).send('Category is required');
  return;
}
if (!location) {
res.status(400).send('Location is required');
return;
}
if (!price) {
res.status(400).send('Price is required');
return;
}
if (!phoneNumber) {
res.status(400).send('Phone number is required');
return;
}
if (!deliveryType) {
  res.status(400).send('Delivery type is required');
  return;
}
const item = {
  id: items.length+1,
  username: username,
  price: price,
  title: title,
  category: category,
  location: location,
  date: timestamp('DD.MM.YYYY HH:mm:ss'),
  phoneNumber: phoneNumber,
  description: description,
  deliveryType: deliveryType
};
items.push(item)
res.send(item)
}) //API postaa  uuden esineen

let items = [
    {
        id: 1,
        username: "Otto",
        price: 1234,
        title: "Peruna",
        category: "Ruoka",
        location: "Oulu",
        date: "12.12.2020",
        phoneNumber: 123123123,
        description: "Ruokatavara",
        deliveryType: "Pickup"      
    },

    {
        id: 2,
        name: "Rape",
        price: 23,
        title: "Audi A360",
        category: "Ajoneuvot",
        location: "Kiiminki",
        date: "13.1.2020",
        phoneNumber: 123123123,
        description: "Ajoneuvo, merkkiä Audi",
        deliveryType: "Shipping"
    }    
  ];//Esimerkkiesineitä

let users = [
  {
    id: 1,
    username: "Jorma",
    password: "1234",
    email: "jorma@email.com"
  },

  {
    id: 2,
    username: "Kalle",
    password: "4321",
    email: "kalle@email.com"
  }
]//Esimerkkikäyttäjiä