const seedPlaces = require('../DBSeed/seed-places');

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