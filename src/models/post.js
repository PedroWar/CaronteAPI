var models = require('../../models/DBconfig')
var likeModel = require('./likes')
var unlikeModel = require('./unlike')

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

async function destroy(query) {
    return await models.Post.destroy({
        where: {
            id: query.id
        }
    }).then(function (response) {
        return response
    })
}

async function likePost(body) {
    await likeModel.create(body)
    
    let post = await models.Post.findByPk(body.PostId)
    
    await post.increment("likes")
    
    return await post.save()
}

async function undoLikePost(body) {
    await likeModel.destroy(body)
    
    let post = await models.Post.findByPk(body.PostId)
    
    await post.decrement("likes")
    return await post.save()
}

async function unlikePost(body) {
    await unlikeModel.create(body)
    
    let post = await models.Post.findByPk(body.PostId)
    
    await post.increment("unlikes")
    return await post.save()
}

async function undoUnlikePost(body) {
    await unlikeModel.destroy(body)
    
    let post = await models.Post.findByPk(body.PostId)
    
    await post.decrement("unlikes")
    return await post.save()
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