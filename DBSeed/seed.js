const seedPlaces = require('./seed-places');

async function run() {
  try {
    await seedPlaces();

    console.log('Database seeding completed successfully.');
    
    process.exit(0);
  } catch (err) {
    console.error('Database seeding failed:', err);
    process.exit(1);
  }
}

run();