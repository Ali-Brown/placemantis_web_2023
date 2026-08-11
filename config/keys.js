require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const config = isProduction
  ? require('./prod')
  : require('./dev');

if (!config.mongoURI) {
  throw new Error(
    `MongoDB connection string is missing for ${
      isProduction ? 'production' : 'development'
    } environment.`
  );
}

console.log(
  'Application environment:',
  process.env.NODE_ENV
);

module.exports = config;