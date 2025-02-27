const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');


router.put('/approve-lawyer/:id', authMiddleware, adminController.approveLawyer);

router.delete('/delete-account/:role/:id', authMiddleware, adminController.deleteAccount);

router.get('/view-complaints', authMiddleware, adminController.viewComplaints);


router.put('/resolve-complaint/:id', authMiddleware, adminController.resolveComplaint);

router.get('/allusers', adminController.getAllUsers);

module.exports = router;