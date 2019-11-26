var models = require('../../models/DBconfig');

async function create(body) {
    return await models.Comment.create(
        {
            comment: body.comment,
            PostId: body.PostId,
            UserId: body.UserId
        }
    )
}

async function destroy(body) {
    return await models.Comment.destroy(
        {
            where:
            {
              id: body.id
            }
        }
    )
}

async function listByPost(query) {
    return await models.Comment.findAll(
        {
            where:
            {
              PostId: query.PostId
            }
        }
    )
}

module.exports = {
    create,
    listByPost,
    destroy
}