const express = require('express');
const router = express.Router();
const userController = require('../controller/usercontroller');


router.post ('/users',userController.createUser);
router.get ('/users',userController.getUsers);
router.get ('/users/:id',userController.getSingleUsers);
router.put ('/users',userController.updateUsers);
router.delete ('/users',userController.deleteUsers);

module.exports = router;