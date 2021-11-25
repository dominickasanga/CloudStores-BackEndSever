const {
    sequelize,
    Item,
    Category,
    User,
    Bookmark
} = require('../src/models')

const Promise = require('bluebird')
const items = require('./Items.json')
const users = require('./Users.json')
const bookmarks = require('./bookmarks.json')
const categories = require('./categories')

sequelize.sync({force: true})
  .then ( async function() {
      await Promise.all(
          users.map(user => {
              User.create(user)
          })
      )

      await Promise.all(
        items.map(item => {
            Item.create(item)
        })
      )

      await Promise.all(
        categories.map(category => {
            Category.create(category)
        })
      )

      await Promise.all(
        bookmarks.map(bookmark => {
          Bookmark.create(bookmark)
        })
      )
      
  })