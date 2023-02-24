const mongoose = require('mongoose');

connect('localhost://127.0.0.1:27017/commentExample', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;