const { dbPool } = require('../services/mysql');

async function createMessage(message) {
  await createTable();
  const { senderId, receiverId, body } = message;
  const query = 'INSERT INTO messages(senderId, receiverId, body) VALUES(?, ?, ?);';
  const result = await dbPool.promise().execute(query, [senderId, receiverId, body]);
  return { ...message, id: result.insertedId };
}

async function createTable() {
  const query = 'CREATE TABLE IF NOT EXISTS messages('
    + 'id INT AUTO_INCREMENT PRIMARY KEY,'
    + 'senderId INT NOT NULL,'
    + 'receiverId INT NOT NULL,'
    + 'body VARCHAR(500) NOT NULL,'
    + 'createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,'
    + 'updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,'
    + 'FOREIGN KEY (senderId) REFERENCES users(id),'
    + 'FOREIGN KEY (receiverId) REFERENCES users(id));';
  await dbPool.promise().query(query);
}

async function readMessages(user1, user2) {
  await createTable();
  const query = 'SELECT * FROM messages WHERE senderId IN (?, ?) AND receiverId IN (?, ?) ORDER BY createdAt DESC;';
  const [result] = await dbPool.promise().execute(query, [user1, user2, user1, user2]);
  return result;
}

async function readLatestMessages(userId) {
  await createTable();
  const query = 'SELECT * FROM messages WHERE senderId=? OR receiverId=? ORDER BY createdAT DESC;';
  const [result] = await dbPool.promise().execute(query, [userId, userId]);
  return result;
}

module.exports = { createMessage, readLatestMessages, readMessages };
