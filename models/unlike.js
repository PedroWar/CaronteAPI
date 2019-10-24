module.exports = function (Sequelize, DataTypes) {
    var unlike = Sequelize.define("UnlikePost", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        PostId: {
            type: DataTypes.INTEGER,
            unique: "compositeIndex"
        },
        UserId: {
            type: DataTypes.INTEGER,
            unique: "compositeIndex"
        }
    }, {});

    return unlike;
};
