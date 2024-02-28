const  PrononciationModel=require('../models/Prononciation')


const CreatePrononciation = async (req,res)=>{
    const {lettres,resltat}=req.body;

    const newPrononciation  =await PrononciationModel.create({lettres,resltat})

    res.json(newPrononciation )
}
const onePrononciation = async (req,res)=>{
    const {_id}=req.body;

    const newPrononciation  = await PrononciationModel.findOne({_id})

    res.json(newPrononciation )
}


module.exports={
   
    CreatePrononciation,
    onePrononciation
};