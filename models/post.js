const mongoose = require('mongoose')

var postSchema = new mongoose.Schema({
    title: String,
    body: String,
    tags: [String]
})

var post = new mongoose.model('Post', postSchema)
module.exports = post