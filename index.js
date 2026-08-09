import express from 'express';
import { urlencoded, json } from 'body-parser';
import authRoutes from './routes/auth';
import seedPlaces from './DBSeed/places_seed';


const app = express();

/* MONGODB SET UP - start */
/*
import { MongoClient, ServerApiVersion } from 'mongodb';
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
    //console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
/* MONGODB SET UP - end */


app.use(urlencoded({ extended: false }));
app.use(json());

// API routes
authRoutes(app);

// Basic test endpoint
app.get('/home', (req, res) => {
  res.send('Welcome to placemantis home');
});

// Serve React production build
app.use(static(path.join(__dirname, 'client', 'build')));

// React Router fallback
app.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'client', 'build', 'index.html')
  );
});

app.get('/seed-places', (req, res) => {

  if (req.query.key !== keys.seedKey) {
    return res.status(403).send('Forbidden');
  }
  
  try {
    await seedPlaces();

    res.send('Places seeded successfully');
  } catch (err) {
    console.error('Seeding error:', err);

    res.status(500).send({
      error: 'Database seeding failed'
    });
  }
});

// Only start a local HTTP server when running directly.
// Vercel will handle the server itself.
if (require.main === module) {
  const PORT = process.env.PORT || 8000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;