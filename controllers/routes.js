var moment = require('moment')
var userApi = require('./userController')

exports.configura = function (router) {
	router.get('/', function (req, res) {
		res.status(200).json({
			message: 'Api Caronte',
			timestamp: moment().unix()
		});
	});

	userApi.configura(router)
};
