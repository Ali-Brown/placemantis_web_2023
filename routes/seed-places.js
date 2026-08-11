const seedPlaces = require('../DBSeed/seed-places');

/*
 * ============================================================
 * SEED ROUTE IS ONLY USEFUL FOR ONE TIME USE IN A NEW PROJECT
 * WITH FRESH MONGODB INSTALLATION
 * ============================================================
 * TEMPORARY — remove after production databases Dev and/or Prod is seeded.
 * For production seeding:
 * Run at terminal using: curl -X POST "https://placemantis-web-2023-hcsxo1d4x-placemantis.vercel.app/api/seed-places?key=ENTER-PRODUCTION-SEED-KEY"
 * For dev seeding:
 * Run node DBSeed/seed.js at project root directory
 * 
 *
 * 
 */

module.exports = (app) => {
  app.post('/api/seed-places', async (req, res) => {
    try {
      const providedKey = req.query.key;
      const expectedKey = process.env.SEED_KEY;

      if (!expectedKey) {
        console.error('SEED_KEY is not configured.');

        return res.status(500).json({
          error: 'Seed key is not configured.'
        });
      }

      if (providedKey !== expectedKey) {
        return res.status(401).json({
          error: 'Unauthorized.'
        });
      }

      const result = await seedPlaces();

      return res.status(200).json({
        message: 'Places seeded successfully.',
        insertedCount: result.insertedCount
      });
    } catch (error) {
      console.error('Production seed failed:', error);

      return res.status(500).json({
        error: 'Database seeding failed.'
      });
    }
  });
};