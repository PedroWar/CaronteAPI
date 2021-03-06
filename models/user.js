module.exports = function (Sequelize, DataTypes) {
    var User = Sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: DataTypes.STRING(250),
        password: DataTypes.STRING(250),
        name: DataTypes.STRING(250),
        phone: DataTypes.BIGINT,
        course: DataTypes.STRING(250)
    }, {}
    );

    User.associate = (models) => {
        User.hasMany(models.Comment)
        User.belongsToMany(
            models.Group, {
                through: {
                    model: models.GroupUsers,
                    unique: true
                },
                foreignKey: 'UserId',
                constraints: false
            }
        )
        User.belongsToMany(
            models.Post, {
                through: {
                    model: models.LikePost,
                    unique: true
                },
                foreignKey: 'UserId',
                constraints: false
            }
        )
        User.belongsToMany(
            models.Post, {
                through: {
                    model: models.UnlikePost,
                    unique: true
                },
                foreignKey: 'UserId',
                constraints: false
            }
        )
    }

    return User;
};
