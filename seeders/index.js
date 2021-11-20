const {
    sequelize,
    Item,
    User
} = require('../src/models')

const Promise = require('bluebird')
const items = require('./Items.json')
const users = require('./Users.json')

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