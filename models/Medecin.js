const mongoose = require("mongoose")

const MedecinSchema = new mongoose.Schema({
    name:{
        type: String,
    },
   
    email:{
        type: String,
    },
    password:{
        type: String,
        required:true
    },
    tel:{
        type: String,
    },
    adresse:{
        type: String,
    }


})



const MedecinModel= mongoose.model("medecin",MedecinSchema)
module.exports = MedecinModel