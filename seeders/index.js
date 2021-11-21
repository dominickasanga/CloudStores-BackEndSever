const {
    sequelize,
    Item,
    User,
    Bookmark
} = require('../src/models')

const Promise = require('bluebird')
const items = require('./Items.json')
const users = require('./Users.json')
const bookmark = require('./bookmarks.json')

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
  })