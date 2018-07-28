var Router = require('express')
var placeController =  require('./controllers/place')
var notFoundController = require('./controllers/notFound')

const baseRouter = Router()

// api routes
baseRouter.use('/api/place', placeController)

// wildcard routes
baseRouter.get('*', notFoundController)

module.exports = baseRouter
