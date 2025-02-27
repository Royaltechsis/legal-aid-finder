const express = require('express');
const router = express.Router();
const lawyerController = require('../controllers/lawyerController'); // Ensure correct import
const authMiddleware = require('../middleware/authMiddleware'); // Import the auth middleware

// Define routes correctly
router.post('/register', lawyerController.registerLawyer);
router.get('/', lawyerController.getAllLawyers); 
router.get('/:id',  lawyerController.getLawyerById);
router.put('/profile/:id', lawyerController.updateLawyerProfile); 
router.delete('/:id',  lawyerController.deleteLawyer); 
router.post('/login', lawyerController.loginLawyer);
module.exports = router;