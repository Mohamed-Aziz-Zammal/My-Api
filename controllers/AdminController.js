const AdminModel =require('../models/Admins')
const bcrypt =require('bcrypt');
const jwt =require ('jsonwebtoken');

//admin
const register = async (req,res)=>{
    const {username ,password} = req.body

    const admin = await AdminModel.findOne({username})
  
    if(admin){
      return res.json({message:"Admin already exists!"})
  
    }
  
    const hashedPassword = bcrypt.hashSync(password,10)
    
    const newAdmin =new AdminModel({
      username :username,
      password:hashedPassword 
    });
  
    await newAdmin.save();
  
    return res.json({message:"Admin created successfully"})
}

const login =async (req,res)=>{
    const {username ,password} = req.body
    const admin = await AdminModel.findOne({username})
    if(!admin){
      return res.json({message:"Admin doesn't exists!"})
  
    }
  
    const isPasswordValid = await bcrypt.compare(password,admin.password)
  
    if(!isPasswordValid){
      return res.json({message:"username or password is not correct"})
  
    }
  
    const token = jwt.sign({id: admin._id},"sarra")
  
    return res.json({token, adminID:admin._id})
  
  }
  // users
  const UsersModel =require('../models/Users')
  const getAllUsers = async (req,res)=>{
    const allUsers = await UsersModel.find()
    res.json(allUsers);
  }

  // medecin
  //create medecin
  const MedecinModel =require('../models/medecin')

  const createmedecin = async (req,res)=>{
    const {name,email,password,tel,adresse}=req.body;
    const medecin = await MedecinModel.findOne({name})
  
    if(medecin){
      return res.json({message:"medecin already exists!"})
  
    }

    const hashedPassword = bcrypt.hashSync(password,10)

    const newMedecin =new MedecinModel({
      name :name,
      email:email,
      password:hashedPassword,
      tel:tel,
      adresse:adresse
      
    });
    await newMedecin.save();
  
    return res.json({message:"Medecin created successfully"})
}
//updat medecin
 const updatMedecin = async (req,res)=>{
  const idMedecin =req.params.medecinID
 }






module.exports={
    register,
    login,
    getAllUsers,
    createmedecin,
    updatMedecin
};