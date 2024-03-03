const  Question9Model=require('../models/Question9')


const CreateQuestion9 = async (req,res)=>{
    const {mots,deffinitions,resltat}=req.body;

    const newQuestion9  =await Question9Model.create({mots,deffinitions,resltat})

    res.json(newQuestion9 )
}
const oneQuestion9 = async (req,res)=>{
    const {_id}=req.body;

    const newQuestion9  = await Question9Model.findOne({_id})

    res.json(newQuestion9 )
    
}


module.exports={
   
    CreateQuestion9,
    oneQuestion9
};