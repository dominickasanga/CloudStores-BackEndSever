module.exports = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define('bookmark', {})

    Bookmark.associate = function (models) {
        Bookmark.belongsTo(models.User)
        Bookmark.belongsTo(models.Item)
    }

    return Bookmark
}