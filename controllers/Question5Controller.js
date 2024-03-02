const  Question5Model=require('../models/Question5')


const CreateQuestion5 = async (req,res)=>{
    const {lettres,resltat}=req.body;

    const newQuestion5  =await Question5Model.create({lettres,resltat})

    res.json(newQuestion5 )
}
const oneQuestion5 = async (req,res)=>{
    const {_id}=req.body;

    const newQuestion5  = await Question5Model.findOne({_id})

    res.json(newQuestion5 )
    
}


module.exports={
   
    CreateQuestion5,
    oneQuestion5
};