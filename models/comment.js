module.exports = function (Sequelize, DataTypes) {
    var comment = Sequelize.define("Comment", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comment: {
            type: DataTypes.STRING(250),
            allowNull: false
        }
    }, {});

    comment.associate = (models) => {
        comment.belongsTo(models.User)
        comment.belongsTo(models.Post)
        
    }

    return comment;
};
