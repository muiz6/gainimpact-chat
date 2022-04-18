const express = require('express');

const messageController = require('../controllers/message_controller');

const messageRouter = express.Router();

messageRouter.post('/', messageController.postMessage);

module.exports = messageRouter;
