const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientController');

router.get('/', controller.get);
router.post('/', controller.post);
router.post('/login', controller.login);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;