const express = require('express');
const router = express.Router();
const lawyerController = require('../controllers/lawyerController');

router.post('/lawyers/register', lawyerController.registerlawyer);
router.get('/lawyers', lawyerController.getAlllawyers);
router.get('/lawyers/:id', lawyerController.getlawyerById);
router.put("/lawyers/profile/:id",  updateLwyerProfile);
router.delete('/lawyers/:id', lawyerController.deletelawyer);

module.exports = router;
