const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/mytest").then(()=>{
    console.log('connected to DB')
})
.catch(()=>{
    console.log('Unable to connected to DB')

})