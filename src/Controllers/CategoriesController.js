const {Category} = require('../models')
const { Op } = require("sequelize");


module.exports = {
    async index(req, res) {
        try {
            let Categories = null
            const search = req.query.search

            if (search) {
                Categories = await Category.findAll({
                    where: {
                      name: {
                        [Op.like]: `%${search}%`
                      }
                    }
                  });
            } else {
                Categories = await Category.findAll({
                    limit: 10
                 })
            }
            res.send(Categories)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to retrive Categories'
            })
        }
    },
    async post(req, res) {
        try {
            const category = await Category.create(req.body)
            res.send(category)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured create a category'
            })
        }
    },
    async show (req, res) {
        try {
            const category = await Category.findByPk(req.params.categoryId)
            res.send(category)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to retrive an category'
            })
        }
    },
    async put (req, res) {
        try {
            await Category.update(req.body,{
                where: {
                    id: req.params.itemId
                }
            })
            res.send(req.body)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to update the category'
            })
        }
    }
}