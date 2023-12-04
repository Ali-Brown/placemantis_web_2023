const express = require('express');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const seedPlaces = require('./dbModels/places_seed');

const app = express();

/* MONGODB SET UP - start */
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = keys.mongoURI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
/* MONGODB SET UP - end */


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.get('/', (req, res) => {
  res.send('Welcome to Placemantis Web New Implementation');
});

app.get('/home', (req, res) => {
    res.send('Welcome to Placemantis Web New Implementation');
});

/* app.get('/seed_places', (req, res) => {
  seedPlaces();
  res.send('Testing MongoDB connection');
}); */

//app.listen(8000);
const PORT = process.env.PORT || 8000;
app.listen(PORT);
