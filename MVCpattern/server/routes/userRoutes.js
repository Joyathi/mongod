const express = require('express');
const router = express.Router();
const userController = require('../controller/usercontroller');


router.post ('/users',userController.createuser);
router.get ('/users',userController.getuser);
router.get ('/users/:id',userController.getsingleuser);

router.put ('/users',useController.updateuser);
router.delete ('/users',userController.deleteuser);

module.exports = router;