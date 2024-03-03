const mongoose = require("mongoose")

const Question9Schema = new mongoose.Schema({
    mots:{
        type: Array,
    },
    deffinitions:{
        type: Array,
    },
    resltat:{
        type: String,
    }
    
   
   
})



const Question9Model = mongoose.model("Question9",Question9Schema)
module.exports = Question9Model