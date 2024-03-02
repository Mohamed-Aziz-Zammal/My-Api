const mongoose = require("mongoose")

const Question4Schema = new mongoose.Schema({
    lettres:{
        type: Array,
    },
    resltat:{
        type: String,
    }
    
   
   
})



const Question4Model = mongoose.model("Question4",Question4Schema)
module.exports = Question4Model