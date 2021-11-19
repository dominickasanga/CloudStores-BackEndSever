module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        sku: DataTypes.STRING,
        productImageUrl: DataTypes.STRING,
        tab: DataTypes.TEXT
    })

    return Item
}