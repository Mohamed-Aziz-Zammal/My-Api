const mongoose = require("mongoose")

const Question2Schema = new mongoose.Schema({
    lettres:{
        type: Array,
    },
    resltat:{
        type: String,
    }
    
   
   
})



const Question2Model = mongoose.model("Question2",Question2Schema)
module.exports = Question2Model