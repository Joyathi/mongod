const express = require('express');
const router = express.Router();
const userController = require('../controller/usercontroller');


router.post ('/users',userController.createUser);
router.get ('/users',userController.getUser);
router.get ('/users/:id',userController.getsingleUser);

router.put ('/users',useController.updateUser);
router.delete ('/users',userController.deleteUser);

module.exports = router;