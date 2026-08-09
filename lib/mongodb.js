const { MongoClient, ServerApiVersion } = require('mongodb');
const keys = require('../config/keys');

const client = new MongoClient(keys.mongoURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

let db;

async function getDb() {
  if (db) {
    return db;
  }

  await client.connect();

  db = client.db('placemantis_web');

  return db;
}

module.exports = {
  getDb,
  client
};