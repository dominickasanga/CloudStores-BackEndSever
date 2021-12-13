const AuthenticationController = require('../src/Controllers/AuthenticationController')
const ItemsController = require('../src/Controllers/ItemsController')
const BookmarkController = require('../src/Controllers/BookmarkController')
const CategoriesController = require('../src/Controllers/CategoriesController')
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

  app.get('/bookmarks',
    BookmarkController.index)
  app.post('/bookmarks',
    BookmarkController.post)
  app.delete('/bookmarks/:bookmarkId',
    BookmarkController.delete)

  app.get('/categories',
    CategoriesController.index)
  app.get('/categories/:categoryId',
    CategoriesController.show)
}