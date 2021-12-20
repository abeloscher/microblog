var express = require('express')
var Post = require('../models/post')
var router = express.Router()

router.get('/post', (req, res, next) => {
    res.send('')
})

// router.get('/post/:id', (req, res, next) => {
// })

router.post('/post', (req, res, next) => {
    Post.create(res.json)

})

module.exports = router