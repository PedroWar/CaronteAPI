module.exports = function (Sequelize, DataTypes) {
    var Post = Sequelize.define("Post", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        body: DataTypes.STRING(250),
        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        unlikes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }        
    }, {})

    Post.associate = (models) => {
        Post.belongsTo(models.User, {as:"Owner"})
        Post.hasMany(models.Comment)
        Post.belongsTo(models.Group, {as:"Group"})
        Post.belongsToMany(
            models.User, {
                through: {
                    model: models.LikePost,
                    unique: true
                },
            foreignKey: 'PostId',
            constraints: false
            }
        )
        Post.belongsToMany(
            models.User, {
                through: {
                    model: models.UnlikePost,
                    unique: true
                },
                foreignKey: 'PostId',
                constraints: false
            }
        )
    }
    return Post;

};
