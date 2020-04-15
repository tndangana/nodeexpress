const express = require('express');

const resource = require('./user.resource');
const authenticateToken = require('../../config/auth');
const router = express.Router();

router.post('/', resource.create);
router.post('/login', resource.authenticateLogin);
router.get('/', authenticateToken, resource.findAll);
router.get('/:id', authenticateToken, resource.findOne);
router.put('/:id', authenticateToken, resource.update);
router.delete('/:id', authenticateToken, resource.delete);

module.exports = router;