const express = require('express');
const router = express.Router();
const userController = require('../user/userController');

router.post('/', userController.create);
router.get('/', userController.getAll);
router.get('/:id', userController.getOne);
router.delete('/delete/:id', userController.delete);
module.exports = router;