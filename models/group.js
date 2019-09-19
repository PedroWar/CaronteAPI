var models = require('../definitions/DBconfig');

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
    }).then(function (response) {
        return response
    })
}

module.exports = {
    create,
    read,
    update,
    destroy
}