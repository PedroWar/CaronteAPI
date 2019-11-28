var models = require('../../models/DBconfig')

async function create(body) {
    return await models.LikePost.create(
        {
            PostId: body.PostId,
            UserId: body.UserId
        }
    )
}

async function destroy(body) {
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
    destroy
}