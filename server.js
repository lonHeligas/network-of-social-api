const express = require ('express');
const mongodb = require('mongodb').MongoClient;
const data = require('./models/data');

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017/socialNetDB`;

let db;

