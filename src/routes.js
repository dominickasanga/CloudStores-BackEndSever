const AuthenticationController = require('../src/Controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('../src/policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)
}