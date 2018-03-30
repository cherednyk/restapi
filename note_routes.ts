let ObjectID = require('mongodb').ObjectID;
const MONGO_COLLECTION = process.env.MONGO_COLLECTION;

const routes = (app, db) => {

  app.post(`/${MONGO_COLLECTION}`, (req, res) => {
    const note = {text: req.body.body, title: req.body.title};
    db.collection(MONGO_COLLECTION).insert(note, (err, result) => {
      if (err) {
        res.send({'error': `An error has occurred ${err}`});
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.get(`/${MONGO_COLLECTION}/:id`, (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    db.collection(MONGO_COLLECTION).findOne(details, (err, item) => {
      if (err) {
        res.send({'error': `An error has occurred ${err}`})
      } else {
        res.send(item);
      }
    })
  });

  app.put(`/${MONGO_COLLECTION}/:id`, (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    const note = {text: req.body.body, title: req.body.title};
    db.collection(MONGO_COLLECTION).update(details, note, (err, result) => {
      if (err) {
        res.send({'error': `An error has occurred ${err}`});
      } else {
        res.send(note);
      }
    });
  });

  app.delete(`/${MONGO_COLLECTION}/:id`, (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    db.collection(MONGO_COLLECTION).remove(details, (err, item) => {
      if (err) {
        res.send({'error': `An error has occurred ${err}`});
      } else {
        res.send(`Note with ${id} id was deleted`);
      }
    })
  });
};


export {routes};
		