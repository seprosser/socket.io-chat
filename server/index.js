const express = require('express');
const morgan = require('morgan');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: { origin: '*' },
});

app.use(morgan('tiny'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🔌 Hello World 🔌',
    user: req.user,
  });
});

const notFound = (req, res, next) => {
  res.status(404);
  const error = new Error('Not Found - ' + req.originalUrl);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: err.stack,
  });
};

app.use(notFound);
app.use(errorHandler);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (message) => {
    console.log(message);
    io.emit('message', message);
  });
});

http.listen(5000, () => {
  console.log('Listening on localhost port 5000');
});
