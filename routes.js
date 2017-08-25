const Router = require('express').Router;
const router = new Router();

const example = require('./model/example/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to node-api-skeleton API!' });
});

router.use('/example', example);

module.exports = router;
