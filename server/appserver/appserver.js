var express = require('express');
var app = express();

app.get('/api', function (req, res) {
  res.send('Yes API!');
});

app.use(express.static('../dist'));

port = 3000

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

