const AuthenticationController = require('../Controllers/AuthenticationController')

module.exports = (app) => {
  app.post('/register',
  AuthenticationController.register)
}