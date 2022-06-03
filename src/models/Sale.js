module.exports = (sequelize, DataTypes) => {
    const sale = sequelize.define('Sale', {
        item_id: DataTypes.INTEGER,
        customer_id: DataTypes.INTEGER,
        cart_id: DataTypes.INTEGER
    })

    return sale
}