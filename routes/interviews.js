const express = require('express');
const router = express.Router();

const interview_controller = require('../controllers/interview_controller');

router.post('/createInterview',interview_controller.createInterview);

router.post('/updateStudentInterviewStatus', interview_controller.updateStudentInterviewStatus);

module.exports = router;