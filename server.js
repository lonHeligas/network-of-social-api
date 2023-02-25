const express = require('express');
const mongodb = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const data = require('./models/user')

const app = express();
const port = 3001;


const connectionStringURI = `mongodb://127.0.0.1:27017/inventoryDB`;


let db;

app.use(express.json());

mongodb.connect(  
  connectionStringURI,  
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    
    db = client.db();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);


