const Message = require('../models/Message');
const User = require('../models/User');

async function get(req, res, next) {
  try {
    const { user } = req;
    let users = await User.readUsers();
    users = users.filter((userItem) => userItem.id !== user.id);
    const messages = await Message.readLatestMessages(user.id);
    users.forEach((u) => {
      const message = messages.find((m) => m.senderId === u.id || m.receiverId === u.id);
      if (message) {
        u.message = message;
      }
    });

    users.sort((u1, u2) => u2.lastAt - u1.lastAt);
    const firstUser = users[0];
    if (firstUser) {
      firstUser.messages = await Message.readMessages(user.id, firstUser.id);
    }

    res.json({
      profile: {
        id: user.id, name: user.name, username: user.username, email: user.email,
      },
      users,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { get };
