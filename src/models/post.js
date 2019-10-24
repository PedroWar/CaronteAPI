var models = require('../../models/DBconfig');
var sequelize = require('sequelize')

async function create(body) {
    return await models.Post.create(
        {
            body: body.body,
            GroupId: body.GroupId,
            OwnerId: body.OwnerId
        }
    )
}

async function read() {
    return await models.Post.findAll()
}

async function destroy(body) {
    return await models.Post.destroy({
        where: {
            id: body.id
        }
    }).then(function (response) {
        return response
    })
}

async function likePost(body) {
    await createLike(body)
    console.log("post")
    let post = await models.Post.findByPk(body.PostId)
    console.log(post)
    await post.increment("likes")
    return await post.save()
}

async function undoLikePost(body) {
    await destroyLike(body)
    console.log("post")
    let post = await models.Post.findByPk(body.PostId)
    console.log(post)
    await post.decrement("likes")
    return await post.save()
}

async function createLike(body) {
    return await models.LikePost.create(
        {
            PostId: body.PostId,
            UserId: body.UserId
        }
    )
}

async function destroyLike(body) {
    return await models.LikePost.destroy(
        {
            where:
            {
                PostId: body.PostId,
                UserId: body.UserId
            }
        }
    )
}


module.exports = {
    create,
    read,
    destroy,
    likePost,
    undoLikePost
}