const {Item} = require('../models')
const { Op } = require("sequelize");


module.exports = {
    async index(req, res) {
        try {
            let items = null
            const search = req.query.search

            const parsed = parseInt(search);
            if (isNaN(parsed)) { 
                if (search) {
                    items = await Item.findAll({
                        where: {
                          name: {
                            [Op.like]: `%${search}%`
                          }
                        }
                      });
                } else {
                    items = await Item.findAll({
                        limit: 10
                     })
                }
                res.send(items)
            }

            else {
               
                    items = await Item.findAll({
                        where: {
                            categoryId: parsed
                        }
                      });
                
                res.send(items)
            }


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
            await Item.update(req.body,{
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