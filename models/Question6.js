const mongoose = require("mongoose")

const Question6Schema = new mongoose.Schema({
    lettres:{
        type: Array,
    },
    resltat:{
        type: String,
    }
    
   
   
})



const Question6Model = mongoose.model("Question6",Question6Schema)
module.exports = Question6Model