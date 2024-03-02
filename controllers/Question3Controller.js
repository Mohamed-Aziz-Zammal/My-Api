const  Question3Model=require('../models/Question3')


const CreateQuestion3 = async (req,res)=>{
    const {lettres,resltat}=req.body;

    const newQuestion3  =await Question3Model.create({lettres,resltat})

    res.json(newQuestion3 )
}
const oneQuestion3 = async (req,res)=>{
    const {_id}=req.body;

    const newQuestion3  = await Question3Model.findOne({_id})

    res.json(newQuestion3 )
    
}


module.exports={
   
    CreateQuestion3,
    oneQuestion3
};