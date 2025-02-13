const express = require('express');
const router = express.Router();
const lawyerController = require('../controllers/lawyerController'); // Ensure correct import

// Define routes correctly
router.post('/register', lawyerController.registerLawyer);
router.get('/', lawyerController.getAllLawyers);
router.get('/:id', lawyerController.getLawyerById);
router.put('/:id', lawyerController.updateLawyerProfile);
router.delete('/:id', lawyerController.deleteLawyer);

module.exports = router;
