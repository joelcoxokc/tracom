'use strict';

var express = require('express');
var controller = require('./entry.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/batch/:batch_id', controller.getByBatch);
router.get('/order/:order_id', controller.getByOrder);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
