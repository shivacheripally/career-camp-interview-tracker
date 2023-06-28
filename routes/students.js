const express = require('express');
const router = express.Router();

const student_controller = require('../controllers/student_controller');

router.get('/enter_student_data',student_controller.enter_student_data);

router.post('/store_student_data',student_controller.store_student_data);

module.exports = router;