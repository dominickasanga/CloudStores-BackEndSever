module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        name: DataTypes.STRING,
        price: DataTypes.STRING,
        description: DataTypes.STRING,
        categoryId: DataTypes.STRING,
        sku: DataTypes.STRING,
        productImageUrl: DataTypes.STRING,
        tab: DataTypes.TEXT
    })

    return Item
}