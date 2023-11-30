const express = require('express');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
//const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.get('/home', (req, res) => {
    res.send('Welcome to Placemantis Web New Implementation');
});

app.listen(8000);
