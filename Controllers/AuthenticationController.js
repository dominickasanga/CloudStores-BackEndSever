module.exports = {
    register  (req, res) {
            res.send({
                message: `Hello ${req.body.email}! your user was registered have fun`
            })
        } 
    }