"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes = function (app, db) {
    app.post('/notes', function (req, res) {
        var note = { text: req.body.body, title: req.body.title };
        db.collection('notes').insert(note, function (err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            }
            else {
                res.send(result.ops[0]);
            }
        });
    });
};
exports.routes = routes;
