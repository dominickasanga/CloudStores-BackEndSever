module.exports = (sequelize, DataTypes) => {
    const sale = sequelize.define('Sale', {
        item_id: DataTypes.INTEGER,
        customer_id: DataTypes.INTEGER,
        cart_id: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        total: DataTypes.INTEGER,
        price: DataTypes.INTEGER
    })

    return sale
}