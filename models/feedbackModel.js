const {mongoose} =require('mongoose')
const Schema = mongoose.Schema
require('../db/db.js')
const feedback = new mongoose.Schema({
Name:{
    type:String,
    default:""
},
email:{
    type:String,
    default:""
},
phone:{
    type:Number,
    default:""
},
})

const feedbackSchema = mongoose.model("feedBack", feedback)
module.exports = feedbackSchema