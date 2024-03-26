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

  const getMedecin = async (req, res) => {
    const { MedecinID } = req.params;
    try {
      const medecin = await MedecinModel.findById(MedecinID);
      res.json(medecin);
    } catch (error) {
      res.status(404).json({ message: 'medecin not found' });
    }
  };
  const updateMedecin = async (req, res) => {
    const { MedecinID } = req.params;
    const { name,email } = req.body;
    try {
      const updateMedecin = await UsersModel.findByIdAndUpdate(
        MedecinID,
        { name,email },
        { new: true }
      );
      res.json(updateMedecin);
    } catch (error) {
      res.status(404).json({ message: 'MedecinID not found' });
    }
  };

  module.exports={
   
    login,
    getMedecin,
    updateMedecin
   
};