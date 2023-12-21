//const User = require('../models/User');
const keys = require('../config/keys');
const { MongoClient } = require("mongodb");
 
//Replace the following with your Atlas connection string                                                                                                                                        
const url = keys.mongoURI;
const client = new MongoClient(url);
const dbName = "placemantis_web";

module.exports = (app) => {
  //TO-DO
  /* app.get('/api/fetch_current_user', (req, res) => {
    res.send({ user: req.user });
  }); */

  app.post('/api/register_user', (req, res) => {
    const user = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      avatarType: req.body.avatarType,
      rank: 'N/A',
      rankMilestones: [],
      registrationDate: Date.now(),
      savedMission: {},
      bestScoreAfrica: {
        stage: "Africa",
        scope: "Continental",
        simple: 0,
        hard: 0
      },
      bestScoreOceania: {
        stage: "Oceania",
        scope: "Continental",
        simple: 0,
        hard: 0
      },
      bestScoreEurope: {
        stage: "Europe",
        scope: "Continental",
        simple: 0,
        hard: 0
      },
      bestScoreNorthAmerica: {
        stage: "North America",
        scope: "Continental",
        simple: 0,
        hard: 0
      },
      bestScoreAsia: {
        stage: "Asia",
        scope: "Continental",
        simple: 0,
        hard: 0
      },
      bestScoreSouthAmerica: {
        stage: "South America",
        scope: "Continental",
        simple: 0,
        hard: 0
      },
      bestScoreSouthernEurope: {
        stage: "Southern Europe",
        scope: "Subcontinental",
        simple: 0,
        hard: 0
      },
      bestScoreSCAsia: {
        stage: "Central and South Asia",
        scope: "Subcontinental",
        simple: 0,
        hard: 0
      },
      bestScoreWCAfrica: {
        stage: "West and Central Africa",
        scope: "Subcontinental",
        simple: 0,
        hard: 0
      },
      bestScoreCaribbean: {
        stage: "The Caribbean Islands",
        scope: "Subcontinental",
        simple: 0,
        hard: 0
      },
      bestScoreSAfrica: {
        stage: "Southern Africa",
        scope: "Subcontinental",
        simple: 0,
        hard: 0
      },
      bestScoreIndiesAfrica: {
        stage: "West Indies and West Africa",
        scope: "Bicontinental",
        simple: 0,
        hard: 0
      },
      bestScoreAsiaOceania: {
        stage: "Southeast Asia and Oceania",
        scope: "Bicontinental",
        simple: 0,
        hard: 0
      },
      bestScoreAfricaAsia: {
        stage: "East Africa and Middle East Asia",
        scope: "Bicontinental",
        simple: 0,
        hard: 0
      },
      bestScoreWorld: {
        stage: "World",
        scope: "Global",
        simple: 0,
        hard: 0
      },
      bestScoreMultilevel: {
        stage: "Multilevel",
        scope: "Muiltilevel",
        simple: 0,
        hard: 0
      }
    };
    
    async function run() {
      try {
        // Connect to the Atlas cluster
        await client.connect();
        const db = client.db(dbName);

        // Reference the "user" collection in the specified database
        const collection = db.collection("users");
        
        // Prevent additional documents from being inserted if one fails
        const options = { ordered: true };

        // Execute insert operation
        const result = await collection.insertOne(user, options);
      
        // Print result
        //console.log(`${result.insertedCount} documents were inserted`);
        res.send('User Registration Successful');
      } catch (err) {
          //console.log(err.stack);
          res.send({ error: 'Insertion Error' });
      } finally {
          await client.close();
      }
    }
    run().catch(console.dir);
  
  });

  app.get('/api/check_username_availability', (req, res) => {

    async function run() {
      try {
        // Connect to the Atlas cluster
        await client.connect();
        const db = client.db(dbName);

        // Reference the "user" collection in the specified database
        const collection = db.collection("users");
        

        // Execute insert operation
        const result = await collection.findOne({username: req.query.username});
      
        // Print result
        //console.log(result);

        if (result === null) {
          res.send('Username Available');
        } else if (result.username) {
          res.send('Username Unavailable');
        } 

      } catch (err) {
          //console.log(err.stack);
          res.send({ error: 'Find Error' });
      } finally {
          await client.close();
      }
    }
    run().catch(console.dir);
  });


  app.post('/api/login_user', (req, res) => {

    async function run() {
      try {
        // Connect to the Atlas cluster
        await client.connect();
        const db = client.db(dbName);

        // Reference the "user" collection in the specified database
        const collection = db.collection("users");
        
        // Execute insert operation
        const result = await collection.findOne({username: req.body.username, password: req.body.password});
        // Print result
        //console.log(result);

        if (result === null) {
          res.send({ error: "User Not Found!" });
        } else if (result.username) {
          res.send({ authenticatedUser: result });
        } 

      } catch (err) {
          //console.log(err.stack);
          res.send({ error: 'Find Error' });
      } finally {
          await client.close();
      }
    }
    run().catch(console.dir);
  });

  app.post('/api/confirm_user', (req, res) => {
  
    //console.log(req.body.username, req.body.email);

    async function run() {
      try {
        // Connect to the Atlas cluster
        await client.connect();
        const db = client.db(dbName);

        // Reference the "user" collection in the specified database
        const collection = db.collection("users");
        
        // Execute insert operation
        const result = await collection.findOne({username: req.body.username, email: req.body.email});
        // Print result
        //console.log(result);

        if (result === null) {
          res.send({ error: "User Not Found!" });
        } else if (result.username) {
          res.send('User Confirmed');
        } 

      } catch (err) {
          //console.log(err.stack);
          res.send({ error: 'User Confirm Error' });
      } finally {
          await client.close();
      }
    }
    run().catch(console.dir);
  });

  app.post('/api/reset_user', (req, res) => {
  
    //console.log(req.body.username, req.body.email, req.body.password);

    async function run() {
      try {
        // Connect to the Atlas cluster
        await client.connect();
        const db = client.db(dbName);

        // Reference the "user" collection in the specified database
        const collection = db.collection("users");
        
        // Execute insert operation
        const result = await collection.updateOne({username: req.body.username, email: req.body.email}, {$set: {password: req.body.password}});
        // Print result
        //console.log(result);

        if (result.acknowledged) {
          res.send('User Password Reset');
        } else {
          res.send({ error: "Password Reset Failed!" });
        } 

      } catch (err) {
          //console.log(err.stack);
          res.send({ error: 'Update Error' });
      } finally {
          await client.close();
      }
    }
    run().catch(console.dir);
  });

};
