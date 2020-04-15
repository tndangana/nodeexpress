const express = require('express');

const resource = require('./token.resource');

const router = express.Router();

router.post('/verify', resource.verify);

module.exports = router;