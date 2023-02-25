const express = require('express');
const mongodb = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const data = require('./models/User')
const db = require('./config/connection')
const routes = require ('./routes');

const app = express();
const PORT = process.env.PORT || 3001;


//const connectionStringURI = `mongodb://127.0.0.1:27017/networkSocialDB`;

// let db;
app.use(express.json());

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Api server is running on port ${PORT}.`)
  })
})



// mongodb.connect(  
//   connectionStringURI,  
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err, client) => {
    
//     db = client.db();
//     app.listen(port, () => {
//       console.log(`Listening at http://localhost:${port}`);
//     });
//   }
// );


