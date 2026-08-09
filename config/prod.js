module.exports = {
  mongoURI: process.env.MONGODB_URI,
  cookieKey: process.env.COOKIE_KEY,
  seedKey: process.env.SEED_KEY,
  cookieOptions: {
    secure: true,
    sameSite: 'lax'
  }
};