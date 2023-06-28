const express = require('express');
const router = express.Router();

const home_controller = require('../controllers/home_controller');

router.get('/',home_controller.home);

//use of employees route
router.use('/employees',require('./employees'));

//use of students route
router.use('/students',require('./students')); 

//use of interview route
router.use('/interviews',require('./interviews'));

module.exports = router;