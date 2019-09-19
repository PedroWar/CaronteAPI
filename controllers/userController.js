var userApi = require('../models/user');

exports.configura = function (router) {

	router.get('/user/test', function (req, res) {
		res.status(200).json({
			message: 'Teste - User'
		});
	});

	router.post('/user/login', async function (req, res) {
		let objRes;
		objRes = await userApi.login(req.body)
		console.log(objRes)
		if (objRes) {
			return res.status(200).json(objRes)
		}
		else
			return res.status(400).json(objRes)
	});

	router.route("/user/")
		.post(async function (req, res) {
			let objRes;
			objRes = await userApi.create(req.body)
			console.log(objRes)
			if (objRes) {
				return res.status(200).json(objRes)
			}
			else
				return res.status(400).json(objRes)
		})
		.get(async function (req, res) {
			let objRes;
			objRes = await userApi.read()

			if (objRes) {
				return res.status(200).json(objRes)
			}
			else
				return res.status(400).json(objRes)
		})
		.put(async function (req, res) {
			let objRes;
			objRes = await userApi.update(req.body)

			if (objRes) {
				return res.status(200).json(objRes)
			}
			else
				return res.status(400).json(objRes)
		})
		.delete(async function (req, res) {
			let objRes;
			objRes = await userApi.destroy(req.body)

			if (objRes) {
				return res.status(200).json(objRes)
			}
			else
				return res.status(400).json(objRes)
		})
}
