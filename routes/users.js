const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller');

router.get('/sign-in', usersController.chooseBetweenSignIn);
router.get('/sign-up', usersController.chooseBetweenSignUp);
router.post('/category-sign-in', usersController.categorySignIn);
router.post('/category-sign-up', usersController.categorySignUp);

router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usersController.createSession);


module.exports = router;