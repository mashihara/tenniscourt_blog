var Router = require('express')
var router = Router()

router.get('/', (req, res) => {
  tableData= [{
    display_id: '0001',
    place_name: '有明'
  }, {
    display_id: '0002',
    place_name: '大井埠頭'
  }, {
    display_id: '0003',
    place_name: '平和島公園'
  }]
  res.json(tableData)
});
router.get('/hoge', (req, res) => {
  res.send('Yes , place hoge api')
});

module.exports = router;
