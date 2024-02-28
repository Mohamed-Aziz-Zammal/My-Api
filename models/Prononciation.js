const mongoose = require("mongoose")

const PrononciationSchema = new mongoose.Schema({
    lettres:{
        type: Array,
    },
    resltat:{
        type: String,
    }
    
   
   
})



const PrononciationModel = mongoose.model("prononciation",PrononciationSchema)
module.exports = PrononciationModel