const jwt = require('jsonwebtoken');

const User = require('../models/User');

async function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).json({ message: 'Permission Denied' });
  }

  try {
    const decoded = jwt.verify(token.substring('Bearer '.length), process.env.JWT_SECRET);
    const user = await User.readUser(decoded.userId);
    if (!user) {
      throw Error('Invalid User!');
    }
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
}

module.exports = { verifyToken };
