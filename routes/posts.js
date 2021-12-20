var express = require('express')
var Post = require('../models/post')
var router = express.Router()

router.get('/post', (req, res, next) => {
    Post.find().then((posts) => {
        res.status(200).json(posts).send()
    }).catch((err) => {
        console.error(err)
        res.status(500).send()
    })
})

router.get('/post/:postId', (req, res, next) => {
    Post.findById(req.params.postId).then((post) => {
        res.status(200).json(post).send()
    }).catch((err) => {
        console.error(err)
        res.status(500).send()
    })
})

router.post('/post', (req, res, next) => {
    Post.create(req.body).then(() => {
        res.status(200).send()
    }).catch((err) => {
        console.error(err)
        res.status(500).send()
    })
})

router.delete('/post/:postId', (req, res, next) => {
    Post.deleteOne({_id: req.params.postId}).then(() => {
        res.status(200).send()
    }).catch((err) => {
        console.error(err)
        res.status(500).send()
    })
})

module.exports = router