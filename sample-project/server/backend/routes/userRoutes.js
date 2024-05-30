const express = require('express');
const router = express.Router();
const userController = require('../controller/usercontroller');



router.get ('/users',userController.checkServer);

module.exports = router;