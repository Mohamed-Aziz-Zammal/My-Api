const UsersModel =require('../models/Users')
const bcrypt =require('bcrypt');
const jwt =require ('jsonwebtoken');
/*const createUsers = async (req,res)=>{
    const {name,age,email,password}=req.body;

    const newUsers =await UsersModel.create({name,age,email})

    res.json(newUsers)
}*/
const register = async (req,res)=>{
    const { name,classe ,email,password} = req.body

    const user = await UsersModel.findOne({name})
  
    if(user){
      return res.json({message:"user already exists!"})
  
    }
  
    const hashedPassword = bcrypt.hashSync(password,10)
    
    const newUser =new UsersModel({
      name :name,
      classe:classe,
      email:email,
      password:hashedPassword 
    });
  
    await newUser.save();
  
    return res.json({message:"user created successfully"})
}

const login =async (req,res)=>{
    const {email ,password} = req.body
    const user = await UsersModel.findOne({email})
    if(!user){
      return res.json({message:"email doesn't exists!"})
  
    }
  
    const isPasswordValid = await bcrypt.compare(password,user.password)
  
    if(!isPasswordValid){
      return res.json({message:"email or password is not correct"})
  
    }
  
    const token = jwt.sign({id: user._id},"sarra")
  
    return res.json({token, userID:user._id})
  
  }




module.exports={
     register ,
     login

};