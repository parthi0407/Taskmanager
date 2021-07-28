const express = require('express');
const router = express.Router();
const controller = require('./tasks.controller');

router.get('/:id', controller.getTaskById);
router.get('/',controller.getTask);
router.post('/',controller.saveTask);
router.put('/:id',controller.updateTask);
router.delete('/:id',controller.deleteTask);

module.exports = router;