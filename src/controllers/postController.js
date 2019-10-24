var postApi = require('../models/post');

exports.configura = function (router) {

    router.get('/post/test', function (req, res) {
        res.status(200).json({
            message: 'Teste - Post'
        });
    });

    router.route("/post/")
        .post(async function (req, res) {
            let objRes;
            objRes = await postApi.create(req.body)
            console.log(objRes)
            if (objRes) {
                return res.status(200).json(objRes)
            }
            else
                return res.status(400).json(objRes)
        })
        .get(async function (req, res) {
            let objRes;
            if (req.query.id)
                objRes = await postApi.readOne(req.query)
            else
                objRes = await postApi.read()


            if (objRes) {
                return res.status(200).json(objRes)
            }
            else
                return res.status(400).json(objRes)
        })
        .delete(async function (req, res) {
            let objRes;
            objRes = await postApi.destroy(req.query)

            if (objRes) {
                return res.status(200).json(objRes)
            }
            else
                return res.status(400).json(objRes)
        })

    router.route("/post/like")
        .post(async function (req, res) {
            let objRes;
            objRes = await postApi.likePost(req.body)
            console.log(objRes)
            if (objRes) {
                return res.status(200).json(objRes)
            }
            else
                return res.status(400).json(objRes)
        }).delete(async function (req, res) {
            let objRes;
            objRes = await postApi.undoLikePost(req.body)
            console.log(objRes)
            if (objRes) {
                return res.status(200).json(objRes)
            }
            else
                return res.status(400).json(objRes)
        })

    router.route("/post/unlike")
        .post(async function (req, res) {
            let objRes;
            objRes = await postApi.unlikePost(req.body)
            console.log(objRes)
            if (objRes) {
                return res.status(200).json(objRes)
            }
            else
                return res.status(400).json(objRes)
        })
        .delete(async function (req, res) {
            let objRes;
            objRes = await postApi.undoUnlikePost(req.body)
            console.log(objRes)
            if (objRes) {
                return res.status(200).json(objRes)
            }
            else
                return res.status(400).json(objRes)
        })

    router.route("/post/comment")
        .post(async function (req, res) {
            let objRes;
            objRes = await postApi.createComment(req.body)
            console.log(objRes)
            if (objRes)
                return res.status(200).json(objRes)
            else
                return res.status(400).json(objRes)
        })
        .delete(async function (req, res) {
            let objRes;
            objRes = await postApi.destroyComment(req.query)

            console.log(objRes)
            if (objRes)
                return res.status(200).json(objRes)
            else
                return res.status(400).json(objRes)
        })
        .get(async function (req, res) {
            let objRes;
            objRes = await postApi.getComment(req.query)

            if (objRes)
                return res.status(200).json(objRes)
            else
                return res.status(400).json(objRes)
        })
}
