const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    date:{
        type: Date
    },
    classe:{
        type:String
    },
    email:{
        type: String,
    },
    password:{
        type: String,
        required:true
    },
})



const UsersModel= mongoose.model("users",UsersSchema)
module.exports = UsersModel