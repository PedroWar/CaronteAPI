var groupApi = require('../models/group');

exports.configura = function (router) {

	router.get('/group/test', function (req, res) {
		res.status(200).json({
			message: 'Teste - Group'
		});
	});

	router.route("/group/")
		.post(async function (req, res) {
			let objRes;
			objRes = await groupApi.create(req.body)
			console.log(objRes)
			if (objRes) {
				return res.status(200).json(objRes)
			}
			else
				return res.status(400).json(objRes)
		})
		.get(async function (req, res) {
			let objRes;
			objRes = await groupApi.read()

			if (objRes) {
				return res.status(200).json(objRes)
			}
			else
				return res.status(400).json(objRes)
		})
		.put(async function (req, res) {
			let objRes;
			objRes = await groupApi.update(req.body)

			if (objRes) {
				return res.status(200).json(objRes)
			}
			else
				return res.status(400).json(objRes)
		})
		.delete(async function (req, res) {
			let objRes;
			objRes = await groupApi.destroy(req.body)

			if (objRes) {
				return res.status(200).json(objRes)
			}
			else
				return res.status(400).json(objRes)
		})
}
