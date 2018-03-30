require('dotenv').config();

import {routes} from "./note_routes";

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DB = process.env.MONGO_DB;
const MONGO_PATH = process.env.MONGO_PATH;
const PORT = process.env.API_PORT;

app.use(bodyParser.urlencoded({extended: true}));


const db_url = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_PATH}/${MONGO_DB}`;

MongoClient.connect(db_url, (err, database) => {
  if (err) return console.log(err);
  let db = database.db(MONGO_DB);
  routes(app, db);
  app.listen(PORT);
})


app.get('/', (req, res) => {
  res.send(`It's alive !!! :)`);
});


app.post('/post', (req, res) => {
  res.send(`post body ${JSON.stringify(req.body)}`);
  console.log(req.body);
});
