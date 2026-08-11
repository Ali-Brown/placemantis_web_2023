const { MongoClient, ServerApiVersion } = require('mongodb');
const keys = require('../config/keys');

const uri = keys.mongoURI;

if (!uri) {
  throw new Error('MongoDB connection string is missing.');
}

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // Preserve the connection during nodemon/HMR-style reloads.
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }

  clientPromise = global._mongoClientPromise;
} else {
  // Vercel/serverless: cache the promise in the module scope.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

async function getDb() {
  const connectedClient = await clientPromise;
  return connectedClient.db('placemantis_web');
}

module.exports = {
  clientPromise,
  getDb
};