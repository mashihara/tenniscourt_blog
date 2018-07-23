var Router = require('express')
var router = Router()
const db = require('./dbconnection')

router.get('/', (req, res) => {
  db.any("SELECT display_id,place_name FROM mt_place")
    .then(function (data) {
      res.json(data)
    })
    .catch(function (error) {
      console.log("ERROR:", error);
    });
});
router.get('/hoge', (req, res) => {
  res.send('Yes, place hoge api')
});

module.exports = router;
