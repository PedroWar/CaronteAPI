var userApi = require('../models/user');

exports.configura = function (router) {
	
	router.get('/usuario', function (req, res) {
		res.status(200).json({
			message: 'Teste - login'
		});
	});

	router.post('/v1/login', function (req, res) {
		let objRes = userApi.login(req.body)
		if(objRes) {
			return res.status(200).json(objRes)
		}
		else
			return res.status(400).json(objRes)

	});
};
