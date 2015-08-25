let express = require('express');
let resource = require('../resources/event-resource');

let router = express.Router();

router.get('/', resource.getLatest);

module.exports = router;
