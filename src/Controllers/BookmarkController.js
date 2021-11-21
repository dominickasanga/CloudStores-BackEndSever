const {Bookmark} = require('../models')
const { Op } = require("sequelize");


module.exports = {
    async index(req, res) {
        try {
            const {itemId, userId} = req.query

            const bookmark = await Bookmark.findOne({
                where: {
                    ItemId: itemId,
                    UserId: userId
                }
            })
            res.send(bookmark)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to retrive a bookmark'
            })
        }
    }
}