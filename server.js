const mongoose = require('mongoose')
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
require('./db/db.js')
app.use(bodyParser.json());
app.use(express.json());

const feedBackRouter = require('./router/feedBackRouter')

app.use('/api',feedBackRouter)

app.get('/',(req,res)=>{
    return res.send("connected")
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});