const {Bookmark, Item} = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const {itemId, userId} = req.query
            const where = {
                UserId: userId
            }
            if(itemId) {
                where.ItemId = itemId
            }
            const bookmarks = await Bookmark.findAll({
                where: where,
                include: [
                    {
                        model: Item
                    }
                ]
            })
            res.send(bookmarks)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to retrive a bookmark'
            })
        }
    },

    async post(req, res) {
        try {
           const {itemId, userId} = req.body
           const bookmark = await Bookmark.findOne({
               where: {
                   ItemId: itemId,
                   UserId: userId
               }
           })

           if (bookmark) {
               return res.status(400).send({
                   error: "already added"
               })
           } 

            const newBookmark = await Bookmark.create({
                quantity: "1",
                ItemId: itemId,
                UserId: userId
              })
              res.send(newBookmark)
           
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to add a bookmark'
            })
        }
    },

    async delete(req, res) {
        try {
           const {bookmarkId} = req.params
           const bookmark = await Bookmark.findByPk(bookmarkId)
           await bookmark.destroy()
           res.send(bookmark)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to delete a bookmark'
            })
        }
    },

    async incrementQuantity(req, res) {
        console.log( req.params.bookmarkId)
        try {
            await Bookmark.update(req.body,{
                where: {
                    id: req.params.bookmarkId
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