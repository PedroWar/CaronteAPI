var postApi = require('../models/post');

exports.configura = function (router) {

    router.get('/post/test', function (req, res) {
        res.status(200).json({
            message: 'Teste - Post'
        });
    });

    router.post("/post/like", async function (req, res) {
        let objRes;
        objRes = await postApi.likePost(req.body)
        console.log(objRes)
        if (objRes) {
            return res.status(200).json(objRes)
        }
        else
            return res.status(400).json(objRes)
    }).delete("/post/like", async function (req, res) {
        let objRes;
        objRes = await postApi.undoLikePost(req.body)
        console.log(objRes)
        if (objRes) {
            return res.status(200).json(objRes)
        }
        else
            return res.status(400).json(objRes)
    })

    router.post("/post/unlike", async function (req, res) {
        let objRes;
        objRes = await postApi.unlikePost(req.body)
        console.log(objRes)
        if (objRes) {
            return res.status(200).json(objRes)
        }
        else
            return res.status(400).json(objRes)
    }).delete("/post/unlike", async function (req, res) {
        let objRes;
        objRes = await postApi.undoUnlikePost(req.body)
        console.log(objRes)
        if (objRes) {
            return res.status(200).json(objRes)
        }
        else
            return res.status(400).json(objRes)
    })

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
            objRes = await postApi.destroy(req.body)

            if (objRes) {
                return res.status(200).json(objRes)
            }
            else
                return res.status(400).json(objRes)
        })
}
