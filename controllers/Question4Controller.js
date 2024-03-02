const  Question4Model=require('../models/Question4')


const CreateQuestion4 = async (req,res)=>{
    const {lettres,resltat}=req.body;

    const newQuestion4  =await Question4Model.create({lettres,resltat})

    res.json(newQuestion4 )
}
const oneQuestion4 = async (req,res)=>{
    const {_id}=req.body;

    const newQuestion4  = await Question4Model.findOne({_id})

    res.json(newQuestion4 )
    
}


module.exports={
   
    CreateQuestion4,
    oneQuestion4
};