const  Question7Model=require('../models/Question7')


const CreateQuestion7 = async (req,res)=>{
    const {numbers,resltat}=req.body;

    const newQuestion7  =await Question7Model.create({numbers,resltat})

    res.json(newQuestion7 )
}
const oneQuestion7 = async (req,res)=>{
    const {_id}=req.body;

    const newQuestion7  = await Question7Model.findOne({_id})

    res.json(newQuestion7 )
    
}


module.exports={
   
    CreateQuestion7,
    oneQuestion7
};