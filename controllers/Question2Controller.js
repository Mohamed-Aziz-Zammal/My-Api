const  Question2Model=require('../models/Question2')


const CreateQuestion2 = async (req,res)=>{
    const {lettres,resltat}=req.body;

    const newQuestion2  =await Question2Model.create({lettres,resltat})

    res.json(newQuestion2 )
}
const oneQuestion2 = async (req,res)=>{
    const {_id}=req.body;

    const newQuestion2  = await Question2Model.findOne({_id})

    res.json(newQuestion2 )
    
}


module.exports={
   
    CreateQuestion2,
    oneQuestion2
};