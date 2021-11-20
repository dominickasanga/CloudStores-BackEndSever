const AuthenticationController = require('../src/Controllers/AuthenticationController')
const ItemsController = require('../src/Controllers/ItemsController')

const AuthenticationControllerPolicy = require('../src/policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/items',
    ItemsController.index)

  app.post('/item',
    ItemsController.post)
  
  app.get('/items/:itemId',
    ItemsController.show)
  
  app.put('/items/:itemId',
    ItemsController.put)
}