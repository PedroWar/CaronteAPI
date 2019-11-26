var post = require('../models/post');
var comment = require('../models/comment')

exports.configura = function (router) {

    router.get('/post/test', function (req, res) {
        res.status(200).json({
            message: 'Teste - Post'
        });
    });

    router.route("/post/")
        .post(async function (req, res) {
            let objRes;
            objRes = await post.create(req.body)
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
                objRes = await post.readOne(req.query)
            else
                objRes = await post.read()


            if (objRes) {
                return res.status(200).json(objRes)
            }
            else
                return res.status(400).json(objRes)
        })
        .delete(async function (req, res) {
            let objRes;
            objRes = await post.destroy(req.query)

            if (objRes) {
                return res.status(200).json(objRes)
            }
            else
                return res.status(400).json(objRes)
        })

    router.route("/post/like")
        .post(async function (req, res) {
            let objRes;
            objRes = await post.likePost(req.body)
            console.log(objRes)
            if (objRes) {
                return res.status(200).json(objRes)
            }
            else
                return res.status(400).json(objRes)
        }).delete(async function (req, res) {
            let objRes;
            objRes = await post.undoLikePost(req.body)
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
            objRes = await post.unlikePost(req.body)
            console.log(objRes)
            if (objRes) {
                return res.status(200).json(objRes)
            }
            else
                return res.status(400).json(objRes)
        })
        .delete(async function (req, res) {
            let objRes;
            objRes = await post.undoUnlikePost(req.body)
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
            objRes = await comment.create(req.body)
            console.log(objRes)
            if (objRes)
                return res.status(200).json(objRes)
            else
                return res.status(400).json(objRes)
        })
        .delete(async function (req, res) {
            let objRes;
            objRes = await comment.destroy(req.query)

            console.log(objRes)
            if (objRes)
                return res.status(200).json(objRes)
            else
                return res.status(400).json(objRes)
        })
        .get(async function (req, res) {
            let objRes;
            objRes = await comment.listByPost(req.query)

            if (objRes)
                return res.status(200).json(objRes)
            else
                return res.status(400).json(objRes)
        })
}
