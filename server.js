require('dotenv').config();

const { getDb } = require('./lib/mongodb');

const express = require('express');

const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');


// Enable this when you are ready to seed production.
// The seed module should export a function.
// const seedPlaces = require('./DBSeed/places_seed');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
 * ============================================================
 * API ROUTES
 * ============================================================
 */

authRoutes(app);

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

/*
 * ============================================================
 * TEMPORARY PRODUCTION SEED ROUTE
 * ============================================================
 *
 * This route is intended to be enabled only long enough to
 * seed the production database.
 *
 * Before using it:
 *
 * 1. Uncomment the seedPlaces require above.
 * 2. Add SEED_KEY to Vercel Production environment variables.
 * 3. Deploy.
 * 4. Call:
 *
 *    POST /api/seed-places
 *
 *    with:
 *
 *    Authorization: Bearer YOUR_SEED_KEY
 *
 * 5. Verify the database was seeded.
 * 6. Remove this route.
 * 7. Redeploy.
 *
 * IMPORTANT:
 * Do not leave an unprotected database-seeding endpoint
 * permanently available in production.
 */

app.post('/api/seed-places', async (req, res) => {
  const authHeader = req.headers.authorization;
  const expected = `Bearer ${process.env.SEED_KEY}`;

  if (!process.env.SEED_KEY) {
    return res.status(500).json({
      error: 'SEED_KEY is not configured'
    });
  }

  if (authHeader !== expected) {
    return res.status(401).json({
      error: 'Unauthorized'
    });
  }

  try {
    await seedPlaces();

    return res.status(200).json({
      message: 'Production database seeded successfully'
    });
  } catch (error) {
    console.error('Database seed error:', error);

    return res.status(500).json({
      error: 'Database seeding failed'
    });
  }
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