const  Question1Model=require('../models/Question1')


const CreateQuestion1 = async (req,res)=>{
    const {lettres,resltat}=req.body;

    const newQuestion1  =await Question1Model.create({lettres,resltat})

    res.json(newQuestion1 )
}
const oneQuestion1 = async (req,res)=>{
    const {_id}=req.body;

    const newQuestion1  = await Question1Model.findOne({_id})

    res.json(newQuestion1 )
    
}


module.exports={
   
    CreateQuestion1,
    oneQuestion1
};