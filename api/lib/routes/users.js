const express = require('express');

const userController = require('../controllers/user_controller');

const userRoute = express.Router();

userRoute.post('/', userController.postUser);

userRoute.post('/login', userController.postLogin);

module.exports = userRoute;
