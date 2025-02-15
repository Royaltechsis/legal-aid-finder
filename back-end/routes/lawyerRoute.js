const express = require('express');
const router = express.Router();
const lawyerController = require('../controllers/lawyerController');
const { updateLawyerProfile } = require('../controllers/lawyerController');

router.post('/lawyers/register', lawyerController.registerLawyer);
router.get('/lawyers', lawyerController.getAllLawyers);
router.get('/lawyers/:id', lawyerController.getLawyerById);
router.put('/lawyers/profile/:id', updateLawyerProfile);
router.delete('/lawyers/:id', lawyerController.deleteLawyer);

module.exports = router;
