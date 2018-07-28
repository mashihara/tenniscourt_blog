var Router = require('express')
var placeController =  require('./controllers/place')
var notFoundController = require('./controllers/notFound')

const rootRouter = Router()

// api routes
rootRouter.use('/api/place', placeController)
rootRouter.use('/api/place', placeController)

// wildcard routes
rootRouter.get('*', notFoundController)

module.exports = rootRouter
