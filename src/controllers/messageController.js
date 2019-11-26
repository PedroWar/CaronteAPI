var message = require('../models/message')

exports.configura = function (router) {

    router.get('/message/test', function (req, res) {
        res.status(200).json({
            message: 'Teste - message'
        });
    });

    router.route("/message/")
        .post(async function (req, res) {
            let objRes;
            objRes = await message.create(req.body)
            console.log(objRes)
            if (objRes) {
                return res.status(200).json(objRes)
            }
            else
                return res.status(400).json(objRes)
        })
        .get(async function (req, res) {
            let objRes;
            objRes = await message.list(req.query)
            if (objRes) {
                return res.status(200).json(objRes)
            }
            else
                return res.status(400).json(objRes)
        })
}
