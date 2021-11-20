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
        try {
            const item = await Item.create(req.body)
            res.send(item)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured create an item'
            })
        }
    },
    async show (req, res) {
        try {
            const item = await Item.findByPk(req.params.itemId)
            res.send(item)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to retrive an item'
            })
        }
    },
    async put (req, res) {
        try {
            const item = await Item.update(req.body,{
                where: {
                    id: req.params.itemId
                }
            })
            res.send(req.body)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to update the item'
            })
        }
    }
}