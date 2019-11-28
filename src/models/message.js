var models = require('../../models/DBconfig');
var Sequelize = require('sequelize')
const Op = Sequelize.Op

async function create(body) {
    return await models.Message.create(
        {
            body: body.body,
            EmitterId: body.emitterId,
            ReceiverId: body.receiverId
        }
    )
}

async function destroy(body) {
    return await models.Message.destroy(
        {
            where:
            {
              id: body.id
            }
        }
    )
}

async function list(query) {
    return await models.Message.findAll(
        {
            where:
            {
                [Op.or]: [
                    {
                        [Op.and]: [
                            {
                                EmitterId: query.EmitterId,
                                ReceiverId: query.ReceiverId
                            }
                        ] 
                    }, 
                    {
                        [Op.and]: [
                            {
                                ReceiverId: query.EmitterId,
                                EmitterId: query.ReceiverId
                            }
                        ]
                    }
                ]
            }
        }
    )
}

module.exports = {
    create,
    list,
    destroy
}