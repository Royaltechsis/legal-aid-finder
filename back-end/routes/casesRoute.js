const express =  require('express');
const router = express.Router();
const caseController = require('../controllers/caseController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/newCase', authMiddleware, caseController.createCase);
router.get('newcase', authMiddleware, caseController.fetchCases);
router.get('newcase/:id', authMiddleware, caseController.getCaseById);

