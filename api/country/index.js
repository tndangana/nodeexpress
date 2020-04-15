const express = require('express');

const resource = require('./country.resorce');
const authenticateToken = require('../../config/auth');
const router = express.Router();

router.post('/', authenticateToken, resource.create);
router.get('/', authenticateToken, resource.findAll);
router.get('/:id', authenticateToken, resource.findOne);
router.put('/:id', authenticateToken, resource.update);
router.delete('/:id', authenticateToken, resource.delete);

module.exports = router;