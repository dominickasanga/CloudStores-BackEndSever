module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        categoryImageUrl: DataTypes.STRING,
        action: DataTypes.STRING,
        active: DataTypes.STRING
    })

    return Category
}