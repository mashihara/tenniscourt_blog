const pgp = require('pg-promise')()
var db = pgp(process.env.DB_CONNECTION)
module.exports = db;
