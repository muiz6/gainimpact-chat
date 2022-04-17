const express = require('express');

const chatPgController = require('../controllers/chat_pg_controller');
const authMiddleware = require('../middlewares/auth');

const chatPgRouter = express.Router();

chatPgRouter.get('/', authMiddleware.verifyToken, chatPgController.get);

module.exports = chatPgRouter;
