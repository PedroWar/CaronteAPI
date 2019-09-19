var models = require('../definitions/DBconfig');

exports.login = function (body) {
    models.User.findOne(
        {
            where:
            {
                email: body.email,
                senha: body.senha
            }, attributes:
                [
                    "email"
                ],
        }).then(function (response) {
            return response
        }
    )
}

// exports.login = function (body, res) {
//     models.Usuario.create(
//         {
//             email:
//         }).then(function (response) {
//             if (response == null)
//                 return res.status(400).json([]);

//             return res.status(200).json(response);
//         }
//     )
// }