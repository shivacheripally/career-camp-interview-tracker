const express = require('express');
const passport = require('passport');
const router = express.Router();

const employ_controller = require('../controllers/employ_controller');

router.get('/profile',employ_controller.employProfile);

router.get('/sign-in', employ_controller.sign_in);
router.get('/sign-up', employ_controller.sign_up);

router.post('/create-employ', employ_controller.createEmploy);
router.post('/create-session', passport.authenticate('local', { failureRedirect: '/employees/sign-up' }), employ_controller.createSession);

router.get('/sign-out', employ_controller.destroySession);

module.exports = router;