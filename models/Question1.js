const mongoose = require("mongoose")

const Question1Schema = new mongoose.Schema({
    lettres:{
        type: Array,
    },
    resltat:{
        type: String,
    }
    
   
   
})



const Question1Model = mongoose.model("Question1",Question1Schema)
module.exports = Question1Model