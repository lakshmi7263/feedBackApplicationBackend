// const { model } = require('mongoose');
// const feedBackModel = require('../models/feedbackModel')

// const postFeedBack = async(req,res)=>{
// try{
//     const {name,email}= req.body

//     const newData =new feedBackModel({
//         name,
//         email
//     })

//     await newData.save();
//     return res.status(201).json({message:"data saved"})

// }catch(err){
//     console.error(err)
// }
// }

// module.exports={
//     postFeedBack
// }

const { model } = require('mongoose');
const feedBackModel = require('../models/feedbackModel');

const postFeedBack = async (req, res) => {
  try {
    const { Name, email } = req.body;

    // Validate request body
    if (!Name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    // Create a new feedback document
    const newData = new feedBackModel({
      Name,
      email
    });

    // Save the feedback document
    await newData.save();
    return res.status(201).json({ message: 'Data saved' });
  } catch (err) {
    console.error('Error saving feedback:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  postFeedBack
};
