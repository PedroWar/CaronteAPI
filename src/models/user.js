var models = require('../../models/DBconfig');

async function login(body) {
    return await models.User.findOne(
        {
            where:
            {
                email: body.email,
                password: body.password
            }
        })
}

async function create(body) {
    return await models.User.create(
        {
            email: body.email,
            password: body.password,
            name: body.name,
            phone: body.phone,
            course: body.course
        })

}

async function read() {
    return await models.User.findAll()
}

async function update(body) {
    return await models.User.update(
        {
            email: body.email,
            password: body.password,
            name: body.name,
            phone: body.phone,
            course: body.course
        },
        {
            where: {
                id: body.id
            }
        })
}

async function destroy(body) {
    return await models.User.destroy({
        where: {
            id: body.id
        }
    }).then(function (response) {
        return response
    })
}

module.exports = {
    login,
    create,
    read,
    update,
    destroy
}