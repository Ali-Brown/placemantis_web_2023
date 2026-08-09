require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const authRoutes = require('./routes/auth');
const keys = require('./config/keys');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

authRoutes(app);

app.get('/home', (req, res) => {
  res.send('Welcome to placemantis home');
});

/*
 * TEMPORARY production seed route.
 */
const seedPlaces = require('./DBSeed/places_seed');

app.get('/seed-places', async (req, res) => {
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

if (require.main === module) {
  const PORT = process.env.PORT || 8000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;