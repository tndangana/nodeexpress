const express = require('express');

const resource = require('./resouce');

const router = express.Router();

router.post('/test', resource.Ussd);


module.exports = router;