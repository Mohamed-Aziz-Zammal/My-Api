const mongoose = require("mongoose")

const Question7Schema = new mongoose.Schema({
    numbers:{
        type: Array,
    },
    resltat:{
        type: String,
    }
    
   
   
})



const Question7Model = mongoose.model("Question7",Question7Schema)
module.exports = Question7Model