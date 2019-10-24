module.exports = function (Sequelize, DataTypes) {
    var like = Sequelize.define("LikePost", {
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
    return like;
};
