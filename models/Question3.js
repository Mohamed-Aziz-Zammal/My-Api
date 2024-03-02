const mongoose = require("mongoose")

const Question3Schema = new mongoose.Schema({
    lettres:{
        type: Array,
    },
    resltat:{
        type: String,
    }
    
   
   
})



const Question3Model = mongoose.model("Question3",Question3Schema)
module.exports = Question3Model