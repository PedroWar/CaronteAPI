var models = require('../../models/DBconfig')

async function create(body) {
    return await models.UnlikePost.create(
        {
            PostId: body.PostId,
            UserId: body.UserId
        }
    )
}

async function destroy(body) {
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
    destroy
}