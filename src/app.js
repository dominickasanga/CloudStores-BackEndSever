require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan');
const {sequelize} = require('../src/models')
const config = require('../src/config/config')

const stripe = require('stripe')(
  process.env.STRIPE_PRIVATE_KEY
)

const app = express()

app.use(morgan('combined'))
app.use(bodyparser.json())
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'up and runnimg!'
    })
})

require('../src/routes')(app)
sequelize.sync({})
  .then ( () => {

    app.listen(process.env.PORT || 8183)
    console.log(`Server started on port ${config.port}`)
  })