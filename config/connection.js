const { connect, connection } = require('mongoose');

connect('localhost://127.0.0.1:27017/postSocialDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;