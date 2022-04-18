require('dotenv').config();
const express = require('express');

const chatPgRouter = require('./routes/chat_pg');
const userRouter = require('./routes/users');
const messageRouter = require('./routes/messages');

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) => {
  res.json({ message: 'Welcome to Gainimpact chat server.' });
});

app.use('/chat_pg', chatPgRouter);
app.use('/users', userRouter);
app.use('/messages', messageRouter);

app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, '0.0.0.0', () => console.log(`app is listening on port: ${PORT}`));
