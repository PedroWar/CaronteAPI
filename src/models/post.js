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

async function readOne(query) {
    return await models.Post.findByPk(query.id)
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

async function unlikePost(body) {
    await createUnlike(body)
    
    let post = await models.Post.findByPk(body.PostId)
    
    await post.increment("unlikes")
    return await post.save()
}

async function undoUnlikePost(body) {
    await destroyUnlike(body)
    
    let post = await models.Post.findByPk(body.PostId)
    
    await post.decrement("unlikes")
    return await post.save()
}

async function createUnlike(body) {
    return await models.UnlikePost.create(
        {
            PostId: body.PostId,
            UserId: body.UserId
        }
    )
}

async function destroyUnlike(body) {
    return await models.UnlikePost.destroy(
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
    readOne,
    destroy,
    likePost,
    undoLikePost,
    unlikePost,
    undoUnlikePost
}