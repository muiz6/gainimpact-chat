require('dotenv').config();
const express = require('express');

const userRouter = require('./routes/users');

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) => {
  res.json({ message: 'Welcome to Gainimpact chat server.' });
});

app.use('/users', userRouter);

app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, '0.0.0.0', () => console.log(`app is listening on port: ${PORT}`));
