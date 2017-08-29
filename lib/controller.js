class Controller {
  constructor(schema) {
    this.Schema = schema;
  }

  create(req, res, next) {
    this.Schema.create(req.body)
      .then(doc => res.status(201).json(doc))
      .catch(err => next(err));
  }

  find(req, res, next) {
    return this.Schema.find(req.query)
      .then(collection => res.status(200).json(collection))
      .catch(err => next(err));
  }

  findOne(req, res, next) {
    return this.Schema.findOne(req.query)
      .then(doc => res.status(200).json(doc))
      .catch(err => next(err));
  }

  findById(req, res, next) {
    return this.Schema.findById(req.params.id)
      .then((doc) => {
        if (!doc) { return res.sendStatus(404); }
        return res.status(200).json(doc);
      })
      .catch(err => next(err));
  }

  update(req, res, next) {
    this.Schema.update({ _id: req.params.id }, req.body)
      .then((results) => {
        if (results.n < 1) { return res.sendStatus(404); }
        if (results.nModified < 1) { return res.sendStatus(304); }
        res.sendStatus(204);
      })
      .catch(err => next(err));
  }

  remove(req, res, next) {
    this.Schema.remove({ _id: req.params.id })
      .then((doc) => {
        if (!doc) { return res.sendStatus(404); }
        return res.sendStatus(204);
      })
      .catch(err => next(err));
  }
}

module.exports = Controller;
