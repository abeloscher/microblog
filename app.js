var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var postsRouter = require('./routes/posts');
var mongoUrl = 'mongodb://localhost:27017'
mongoose.connect(mongoUrl).then(() => {
    console.log('Successfully connected to Mongo at ' + mongoUrl)
}).catch(err => {
    console.error(err)
})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', postsRouter);

module.exports = app;
