var models = require('../migrations/DBconfig');

async function create(body) {
    return await models.Group.create(
        {
            name: body.name,
            description: body.description
        })
}

async function read() {
    return await models.Group.findAll();
}

async function update(body) {
    return await models.Group.update(
        {
            name: body.name,
            description: body.description
        },
        {
            where: {
                id: body.id
            }
        })
}

async function destroy(body) {
    return await models.Group.destroy({
        where: {
            id: body.id
        }
    })
}

async function addUser(body) {
    let group = await models.Group.findById(body.groupId)
    return await group.addUser(await models.User.findById(body.userId))
}

async function RemoveUser(body) {
    let group = await models.Group.findById(body.groupId)
    return await group.removeUser(await models.User.findById(body.userId))
}

async function readUsers(query) {
    return await models.Group.findOne( 
        {
        where: {
            id: query.groupId
        },
        include: [{
            model: models.User,
            attributes: [
                'id',
                'name',
                'email',
                'phone',
                'course'
            ]
        }]
    })
}

module.exports = {
    create,
    read,
    update,
    destroy,
    addUser,
    RemoveUser,
    readUsers
}