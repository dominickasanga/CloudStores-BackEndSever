const {Sale} = require('../models')

module.exports = {
    async post(req, res) {
        console.log(req.body)
        try {
            const sale = await Sale.create(req.body)
            res.send(sale)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured create an item'
            })
        }
    },
}