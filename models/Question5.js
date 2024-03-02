const mongoose = require("mongoose")

const Question5Schema = new mongoose.Schema({
    lettres:{
        type: Array,
    },
    resltat:{
        type: String,
    }
    
   
   
})



const Question5Model = mongoose.model("Question5",Question5Schema)
module.exports = Question5Model