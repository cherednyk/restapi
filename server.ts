const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
import {routes} from "./note_routes";



require('dotenv').config();

app.use(bodyParser.urlencoded({extended: true}));

const port = 8001;

const db_url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds227939.mlab.com:27939/restapidb`;

MongoClient.connect(db_url, (err, database) => {
	if (err) return console.log(err);
	let db = database.db('restapidb');
	routes(app, db);
	app.listen(port);
})





app.get('/', (req, res) => {
  res.send(`${process.env.DB_USER}`);
});


app.post('/post', (req, res) => {
  res.send(`post body ${JSON.stringify(req.body)}`);
  console.log(req.body);
});
