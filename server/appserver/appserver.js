require('dotenv').config()
var express = require('express');
var morgan = require('morgan');
var rootRouter = require('./routes');

var app = express();

const port = process.env.PORT || 3000;

// setting morgan(log)
app.use(morgan('tiny'));

// this setting enable both client and server OK! after 'npm run build',do 'node appserver.js'.
// for produciton because of using Docker ,this line need be deleted.
app.use(express.static('dist'));

// for debug
app.get('/api', function (req, res) {
  res.send('Yes Test API!');
});

app.use('/', rootRouter);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

