const  Question6Model=require('../models/Question6')


const CreateQuestion6 = async (req,res)=>{
    const {lettres,resltat}=req.body;

    const newQuestion6  =await Question6Model.create({lettres,resltat})

    res.json(newQuestion6 )
}
const oneQuestion6 = async (req,res)=>{
    const {_id}=req.body;

    const newQuestion6  = await Question6Model.findOne({_id})

    res.json(newQuestion6 )
    
}


module.exports={
   
    CreateQuestion6,
    oneQuestion6
};