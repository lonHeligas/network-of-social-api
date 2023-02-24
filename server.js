const express = require ('express');
const mongodb = require('mongodb').MongoClient;
const routes = require('./routes');
// const data = require('./models/data');

const app = express();
const port = 3001;

let db;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`)
  });
});

