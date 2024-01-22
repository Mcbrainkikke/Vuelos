// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
// Otras rutas para gestionar usuarios

module.exports = router;


