const MedecinModel =require('../models/medecin')
const bcrypt =require('bcrypt');
const jwt =require ('jsonwebtoken');


const login =async (req,res)=>{
    const {email ,password} = req.body
    const medecin = await MedecinModel.findOne({email})
    if(!medecin){
      return res.json({message:"Medecin doesn't exists!"})
  
    }
  
    const isPasswordValid = await bcrypt.compare(password,medecin.password)
  
    if(!isPasswordValid){
      return res.json({message:"username or password is not correct"})
  
    }
  
    const token = jwt.sign({id: medecin._id},"sarra")
  
    return res.json({token, medecinID:medecin._id})
  
  }

  module.exports={
   
    login
   
};