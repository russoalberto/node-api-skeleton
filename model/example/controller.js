const Controller = require('../../lib/controller');
const exampleSchema = require('./schema');

class ExampleController extends Controller {}

module.exports = new ExampleController(exampleSchema);
