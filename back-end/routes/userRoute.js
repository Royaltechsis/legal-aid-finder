const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); 
const authMiddleware = require('../middleware/authMiddleware'); 


router.get('/', authMiddleware, userController.getUserController); 
router.put('/update', authMiddleware, userController.updateUserController);
router.post('/reset-password', userController.resetPasswordController);

module.exports = router;