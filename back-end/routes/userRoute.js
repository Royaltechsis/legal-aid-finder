const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); 
const authMiddleware = require('../middleware/authMiddleware'); 


router.get('/', authMiddleware, userController.getUserController); 
router.put('/update', authMiddleware, userController.updateUserController);
router.post('/reset-password', authMiddleware, userController.resetPasswordController);
router.post('/legalaid/:id', authMiddleware, userController.legalAidController);
router.delete('/deleteuser/:id',authMiddleware, userController.deleteUserController);

//get all users


module.exports = router;

