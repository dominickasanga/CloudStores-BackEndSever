const {Item} = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const items = await Item.findAll({
                limit: 10
            })
            res.send(items)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to retrive items'
            })
        }
    },
    async post(req, res) {
        console.log(req.body)
        try {
            const item = await Item.create(req.body)
            res.send(item)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured create an item'
            })
        }
    }
}