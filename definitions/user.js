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

    return User;
};
