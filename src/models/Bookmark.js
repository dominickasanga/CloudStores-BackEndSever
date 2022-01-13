module.exports = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define('Bookmark', {
      quantity: DataTypes.STRING,
    })
  
    Bookmark.associate = function (models) {
      Bookmark.belongsTo(models.User)
      Bookmark.belongsTo(models.Item)
    }
  
    return Bookmark
  }