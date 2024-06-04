const express = require('express');
const router = express.Router();
const userController = require('./controller');
const reservaController = require('../reserva/controller');

router.post('/', userController.create);
router.get('/', userController.getAll);
router.get('/:id', userController.getOne);
router.delete('/:id', userController.delete);

router.post('/login', userController.login);
router.get('/auth/reservas', userController.getReservas);

router.post('/auth/reservas/:id', reservaController.createReserva)

module.exports = router;