require('dotenv').config();

const { getDb } = require('./lib/mongodb');

const express = require('express');

const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
// TEMPORARY — remove after production database is seeded.
const seedPlacesRoute = require('./routes/seed-places');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
 * ============================================================
 * API ROUTES
 * ============================================================
 */

authRoutes(app);

// TEMPORARY — remove after production database is seeded.
// Run at terminal using: curl -X POST "https://placemantis-web-2023-hcsxo1d4x-placemantis.vercel.app/api/seed-places?key=ENTER-PRODUCTION-SEED-KEY"
seedPlacesRoute(app);

/*
 * ============================================================
 * HEALTH CHECK
 * ============================================================
 */

app.get('/api/health', async (req, res) => {
  try {
    const db = await getDb();

    await db.command({ ping: 1 });

    return res.status(200).json({
      status: 'ok',
      database: 'connected',
      environment: process.env.NODE_ENV || 'development'
    });
  } catch (error) {
    console.error('Health check failed:', error);

    return res.status(500).json({
      status: 'error',
      database: 'disconnected'
    });
  }
});

app.get('/home', (req, res) => {
  res.send('Welcome to placemantis home');
});

/*
 * ============================================================
 * LOCAL SERVER
 * ============================================================
 *
 * When this file is executed directly:
 *
 *     npm start
 *
 * Express listens on localhost.
 *
 * When Vercel imports this file through api/index.js,
 * require.main !== module, so Vercel receives the Express
 * application without starting its own HTTP server.
 */

if (require.main === module) {
  const PORT = process.env.PORT || 8000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;