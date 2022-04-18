const Message = require('../models/Message');

async function getMessages(req, res, next) {
  try {
    const { user } = req;
    const { userId } = req.params;
    if (userId) {
      const messages = await Message.readMessages(user.id, userId);
      res.json(messages);
    }
  } catch (error) {
    next(error);
  }
}

function postMessage(req, res, next) {

}

module.exports = { getMessages, postMessage };
