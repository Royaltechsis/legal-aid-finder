const express = require('express');
const router = express.Router();
const lawyerController = require('../controllers/lawyerController'); // Ensure correct import
const authMiddleware = require('../middleware/authMiddleware'); // Import the auth middleware

// Define routes correctly
router.post('/register', lawyerController.registerLawyer);
router.get('/', authMiddleware, lawyerController.getAllLawyers); 
router.get('/:id', authMiddleware, lawyerController.getLawyerById);
router.put('/profile/:id', authMiddleware, lawyerController.updateLawyerProfile); 
router.delete('/:id', authMiddleware, lawyerController.deleteLawyer); 
module.exports = router;