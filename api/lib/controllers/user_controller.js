const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const SALT_LENGTH = 10;

async function postUser(req, res, next) {
  try {
    const {
      username, email, password, name,
    } = req.body;
    if (!(username && email && password && name)) {
      return res.status(400).json({ message: 'All parameters are required' });
    }

    const oldUser = await User.readUser(email);
    if (oldUser) {
      return res.status(409).json({ message: 'User Already Exists. Please Login' });
    }

    const insertedUser = await User.createUser({
      username,
      email,
      name,
      password: await bcrypt.hash(password, SALT_LENGTH),
    });

    const token = jwt.sign(
      { userId: insertedUser.id },
      process.env.JWT_SECRET,
      { expiresIn: '365d' },
    );

    return res.status(201).json({ token });
  } catch (error) {
    return next(error);
  }
}

async function postLogin(req, res, next) {
  try {
    const { username, password } = req.body;
    if (!(username && password)) {
      return res.status(400).json({ message: '"username" and "password" are required' });
    }

    const user = await User.readUser(username);
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '365d' },
      );
      return res.json({ token });
    }
    return res.status(400).json({ message: 'Invalid Credentials' });
  } catch (error) {
    return next(error);
  }
}

module.exports = { postLogin, postUser };
