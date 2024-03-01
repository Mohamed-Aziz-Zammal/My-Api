const  Question8Model=require('../models/Question8')


const CreateQuestion8 = async (req,res)=>{
    const {numbers,resltat}=req.body;

    const newQuestion8  =await Question8Model.create({numbers,resltat})

    res.json(newQuestion8 )
}
const oneQuestion8 = async (req,res)=>{
    const {_id}=req.body;

    const newQuestion8  = await Question8Model.findOne({_id})

    res.json(newQuestion8 )
    
}


module.exports={
   
    CreateQuestion8,
    oneQuestion8
};