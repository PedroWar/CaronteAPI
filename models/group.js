module.exports = function (Sequelize, DataTypes) {
    var Group = Sequelize.define("Group", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING(250),
        description: DataTypes.STRING(250)
    }, {})

    Group.associate = (models) => {
        Group.belongsToMany(
            models.User, {
                through: {
                    model: models.GroupUsers,
                    unique: false
                },
                foreignKey: 'GroupId',
                constraints: false
            })
    }
    return Group;

};
