const express = require('express');

const {signup , login, forgetPassword, resetPassword} = require('../Controllers/usercontroller');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgetpass', forgetPassword);
router.post('/resetpass', resetPassword);

module.exports = router;