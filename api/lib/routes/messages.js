const express = require('express');

const messageController = require('../controllers/message_controller');
const authMiddleware = require('../middlewares/auth');

const messageRouter = express.Router();

messageRouter.get('/:userId', authMiddleware.verifyToken, messageController.getMessages);

messageRouter.post('/', messageController.postMessage);

module.exports = messageRouter;
