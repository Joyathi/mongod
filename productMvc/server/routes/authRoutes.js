const express = reqquire('express')
const router =express.Router();
const authController = require('../controller/authcontroller');

router.post('/login',authController.login);

module.exports =router;