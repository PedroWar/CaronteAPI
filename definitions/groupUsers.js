module.exports = function (Sequelize, DataTypes) {
    var Gp = Sequelize.define("GroupUsers", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        GroupId: {
            type: DataTypes.INTEGER,
        },
        UserId: {
            type: DataTypes.INTEGER,
        }
    }, {});

    // Gp.associate = (models) => {
    //     Gp.HasOne(
    //         models.User, {
    //             through: {
    //                 model: models.GroupUsers,
    //                 unique: false
    //             },
    //             foreignKey: 'GroupId',
    //             constraints: false
    //         })
    // }
    return Gp;
};
