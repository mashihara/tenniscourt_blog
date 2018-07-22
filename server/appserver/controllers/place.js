var Router = require('express')
var router = Router()
const pgp = require('pg-promise')()

router.get('/', (req, res) => {
  var db = pgp(process.env.DB_CONNECTION)
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
