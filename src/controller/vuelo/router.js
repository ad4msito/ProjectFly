const express = require('express');
const router = express.Router();
const vueloController = require('./controller');

router.get('/',vueloController.getVuelos);
router.get('/:id',vueloController.getOne);
module.exports = router;