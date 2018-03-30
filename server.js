"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var note_routes_1 = require("./note_routes");
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }));
var port = 8001;
var db_url = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@ds227939.mlab.com:27939/restapidb";
MongoClient.connect(db_url, function (err, database) {
    if (err)
        return console.log(err);
    var db = database.db('restapidb');
    note_routes_1.routes(app, db);
    app.listen(port);
});
app.get('/', function (req, res) {
    res.send("" + process.env.DB_USER);
});
app.post('/post', function (req, res) {
    res.send("post body " + JSON.stringify(req.body));
    console.log(req.body);
});
