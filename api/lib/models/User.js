const { dbPool } = require('../services/mysql');

async function createUser(user) {
  await createTable();
  const {
    name, username, email, password,
  } = user;
  const query = 'INSERT INTO users(name, username, email, password) VALUES(?, ?, ?, ?);';
  const result = await dbPool.promise().execute(query, [name, username, email, password]);

  return { id: result.insertedId, ...user };
}

async function createTable() {
  const query = 'CREATE TABLE IF NOT EXISTS users('
    + 'id INT AUTO_INCREMENT PRIMARY KEY,'
    + 'name VARCHAR(100) NOT NULL,'
    + 'username VARCHAR(100) NOT NULL,'
    + 'email VARCHAR(100) NOT NULL,'
    + 'password VARCHAR(255) NOT NULL,'
    + 'createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,'
    + 'updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,'
    + 'UNIQUE(email),'
    + 'UNIQUE(username));';
  await dbPool.promise().query(query);
}

async function readUser(userIdOrEmailOrUsername) {
  await createTable();
  const query = 'SELECT * FROM users WHERE id=? OR email=? OR username=?;';
  const [users] = await dbPool.promise().execute(
    query,
    [userIdOrEmailOrUsername, userIdOrEmailOrUsername, userIdOrEmailOrUsername],
  );
  return users[0];
}

module.exports = { createUser, readUser };
