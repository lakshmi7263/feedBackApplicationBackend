const express = require('express')
const feedBackController = require('../controller/postFeedback')
const app = express();

app.post('/postFeedback',feedBackController.postFeedBack)

module.exports =app
