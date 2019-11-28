module.exports = function (Sequelize, DataTypes) {
    var Message = Sequelize.define("Message", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        body: DataTypes.STRING(250)
    }, {})

    Message.associate = (models) => {
        Message.belongsTo(models.User, {as:"Emitter"})
        Message.belongsTo(models.User, {as: "Receiver"})
    }
    return Message;
};
