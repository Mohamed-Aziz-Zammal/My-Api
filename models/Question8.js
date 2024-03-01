const mongoose = require("mongoose")

const Question8Schema = new mongoose.Schema({
    numbers:{
        type: Array,
    },
    resltat:{
        type: String,
    }
    
   
   
})



const Question8Model = mongoose.model("Question8",Question8Schema)
module.exports = Question8Model